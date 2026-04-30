import { useEffect, useMemo, useState } from 'react'
import { oops } from '../bootstrapp/api'
import {
  ApiPiConditionOperator,
  Item,
  ItemFields,
  ItemIndexedFields,
  ItemSection,
  ItemStatus,
  ItemUrgency,
  CreateItemRequestSection,
  CreateItemRequestStatus,
  CreateItemRequestUrgency,
  UpdateItemRequestStatus,
} from '../generated/src'
import { SECTIONS, SECTION_BY_KEY } from '../bootstrapp/sections'
import { getUser, logout } from '../bootstrapp/auth'
import { crisisLine, emptyListLine } from '../bootstrapp/snark'

interface Props {
  householdId: string
  householdName: string
  onLeave: () => void
}

export function ItemList({ householdId, householdName, onLeave }: Props) {
  const user = getUser()
  const [items, setItems] = useState<Item[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showAdd, setShowAdd] = useState(false)
  const [tab, setTab] = useState<'open' | 'purchased'>('open')

  async function load() {
    setError(null)
    try {
      const result = await oops.filterItem({
        criteria: [
          { fieldName: ItemIndexedFields.HouseholdId, operator: ApiPiConditionOperator.Equal, value: householdId },
          { fieldName: ItemIndexedFields.Status, operator: ApiPiConditionOperator.Equal, value: tab },
        ],
        fields: [
          ItemFields.Id,
          ItemFields.HouseholdId,
          ItemFields.Name,
          ItemFields.Section,
          ItemFields.Urgency,
          ItemFields.Status,
          ItemFields.Notes,
          ItemFields.AddedById,
          ItemFields.AddedAt,
          ItemFields.PurchasedById,
          ItemFields.PurchasedAt,
        ],
      })
      setItems(result)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      setItems([])
    }
  }

  useEffect(() => { void load() }, [householdId, tab])

  const grouped = useMemo(() => {
    if (!items) return null
    const byKey: Record<string, Item[]> = {}
    for (const it of items) {
      const k = it.section ?? ItemSection.Other
      ;(byKey[k] ??= []).push(it)
    }
    for (const arr of Object.values(byKey)) {
      arr.sort((a, b) => urgencyRank(b.urgency) - urgencyRank(a.urgency))
    }
    return byKey
  }, [items])

  const hasCrisis = items?.some(i => i.urgency === ItemUrgency.OutOfMilk) ?? false

  async function addItem(input: { name: string; section: ItemSection; urgency: ItemUrgency; notes?: string }) {
    if (!user) return
    await oops.createItem({
      householdId,
      name: input.name,
      section: input.section as unknown as CreateItemRequestSection,
      urgency: input.urgency as unknown as CreateItemRequestUrgency,
      status: ItemStatus.Open as unknown as CreateItemRequestStatus,
      notes: input.notes,
      addedById: user.sub,
      addedAt: new Date().toISOString(),
    })
    setShowAdd(false)
    void load()
  }

  async function purchase(item: Item) {
    if (!user || !item.id) return
    setItems(prev => prev ? prev.filter(i => i.id !== item.id) : prev)
    try {
      await oops.updateItem(item.id, {
        status: ItemStatus.Purchased as unknown as UpdateItemRequestStatus,
        purchasedById: user.sub,
        purchasedAt: new Date().toISOString(),
      })
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      void load()
    }
  }

  async function reopen(item: Item) {
    if (!item.id) return
    setItems(prev => prev ? prev.filter(i => i.id !== item.id) : prev)
    try {
      await oops.updateItem(item.id, {
        status: ItemStatus.Open as unknown as UpdateItemRequestStatus,
      })
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      void load()
    }
  }

  return (
    <>
      <div className="brand-line">
        <button className="btn-ghost" onClick={onLeave}>&larr; Switch</button>
        <span className="brand" style={{ fontSize: '1.4rem' }}>{householdName}</span>
        <button className="btn-ghost" onClick={logout}>Log out</button>
      </div>
      <p className="subtitle">{user?.name ? `Hi ${user.name}. ` : ''}You signed up for this.</p>

      {hasCrisis && tab === 'open' && (
        <div className="crisis-banner">{crisisLine()}</div>
      )}

      <div className="tabs">
        <button className={`tab ${tab === 'open' ? 'active' : ''}`} onClick={() => setTab('open')}>
          🛒 Still need
        </button>
        <button className={`tab ${tab === 'purchased' ? 'active' : ''}`} onClick={() => setTab('purchased')}>
          ✅ Bought
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      {items === null ? (
        <div className="center"><span className="spinner" /></div>
      ) : items.length === 0 ? (
        <div className="empty-state">
          {tab === 'open' ? emptyListLine() : 'No receipts yet. The crime log is empty.'}
        </div>
      ) : (
        SECTIONS
          .filter(s => grouped?.[s.key]?.length)
          .map(s => (
            <div key={s.key} className="section-block">
              <h3 className="section-header"><span className="emoji">{s.emoji}</span> {s.label}</h3>
              {grouped![s.key].map(item => (
                <ItemRow
                  key={item.id}
                  item={item}
                  isMine={item.addedById === user?.sub}
                  onPurchase={tab === 'open' ? () => purchase(item) : undefined}
                  onReopen={tab === 'purchased' ? () => reopen(item) : undefined}
                />
              ))}
            </div>
          ))
      )}

      {tab === 'open' && (
        <button className="add-fab" onClick={() => setShowAdd(true)}>+ Add item</button>
      )}

      {showAdd && <AddItemModal onCancel={() => setShowAdd(false)} onAdd={addItem} />}
    </>
  )
}

function ItemRow({ item, onPurchase, onReopen }: {
  item: Item
  isMine: boolean
  onPurchase?: () => void
  onReopen?: () => void
}) {
  const urgency = item.urgency ?? ItemUrgency.Chill
  return (
    <div className={`item-row urgency-${urgency}`} onClick={onPurchase ?? onReopen}>
      <div style={{ flex: 1 }}>
        <div className="name">{item.name}</div>
        {item.notes && <div className="notes">{item.notes}</div>}
        {item.purchasedAt && (
          <div className="notes">bought {timeAgo(item.purchasedAt)}</div>
        )}
      </div>
      <span className={`urgency-badge ${urgency}`}>
        {urgency === ItemUrgency.OutOfMilk ? 'OUT OF MILK' : urgency}
      </span>
    </div>
  )
}

function urgencyRank(u: ItemUrgency | undefined): number {
  switch (u) {
    case ItemUrgency.OutOfMilk: return 3
    case ItemUrgency.Soon: return 2
    case ItemUrgency.Chill: return 1
    default: return 0
  }
}

function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime()
  const s = Math.floor(ms / 1000)
  if (s < 60) return 'just now'
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  return `${d}d ago`
}

function AddItemModal({ onCancel, onAdd }: {
  onCancel: () => void
  onAdd: (input: { name: string; section: ItemSection; urgency: ItemUrgency; notes?: string }) => Promise<void>
}) {
  const [name, setName] = useState('')
  const [section, setSection] = useState<ItemSection>(ItemSection.DairyEggs)
  const [urgency, setUrgency] = useState<ItemUrgency>(ItemUrgency.Soon)
  const [notes, setNotes] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  async function submit() {
    if (!name.trim()) return
    setBusy(true)
    setErr(null)
    try { await onAdd({ name: name.trim(), section, urgency, notes: notes.trim() || undefined }) }
    catch (e) { setErr(e instanceof Error ? e.message : String(e)) }
    finally { setBusy(false) }
  }

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>What's missing?</h3>
        {err && <div className="error">{err}</div>}
        <div className="add-form">
          <input
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Milk (lactose-free)"
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) void submit() }}
          />
          <div className="row">
            <select value={section} onChange={e => setSection(e.target.value as ItemSection)}>
              {SECTIONS.map(s => (
                <option key={s.key} value={s.key}>{s.emoji} {s.label}</option>
              ))}
            </select>
            <select value={urgency} onChange={e => setUrgency(e.target.value as ItemUrgency)}>
              <option value={ItemUrgency.Chill}>😎 chill</option>
              <option value={ItemUrgency.Soon}>⏰ soon</option>
              <option value={ItemUrgency.OutOfMilk}>🚨 OUT OF MILK</option>
            </select>
          </div>
          <input
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="notes (brand, qty, vibe...)"
          />
        </div>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onCancel} disabled={busy}>Cancel</button>
          <button className="btn-primary" onClick={submit} disabled={busy || !name.trim()} style={{ flex: 1 }}>
            {busy ? <span className="spinner" /> : 'Add to list'}
          </button>
        </div>
      </div>
    </div>
  )
}

const _section_meta_keepalive = SECTION_BY_KEY
void _section_meta_keepalive
