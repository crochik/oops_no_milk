import { useEffect, useState } from 'react'
import { oops } from '../bootstrapp/api'
import {
  ApiPiConditionOperator,
  HouseholdFields,
  HouseholdIndexedFields,
  Membership,
  MembershipFields,
  MembershipIndexedFields,
  MembershipRole,
  Household,
} from '../generated/src'
import { logout, getUser } from '../bootstrapp/auth'
import { inviteCode, noHouseholdLine } from '../bootstrapp/snark'

interface Props {
  onPick: (householdId: string, householdName: string) => void
}

interface Row {
  membership: Membership
  household?: Household
}

export function HouseholdPicker({ onPick }: Props) {
  const user = getUser()
  const [rows, setRows] = useState<Row[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showCreate, setShowCreate] = useState(false)
  const [showJoin, setShowJoin] = useState(false)

  async function load() {
    setError(null)
    if (!user) return
    try {
      const memberships = await oops.filterMembership({
        criteria: [{
          fieldName: MembershipIndexedFields.UserId,
          operator: ApiPiConditionOperator.Equal,
          value: user.sub,
        }],
        fields: [
          MembershipFields.Id,
          MembershipFields.HouseholdId,
          MembershipFields.UserId,
          MembershipFields.Role,
          MembershipFields.JoinedAt,
        ],
      })
      const householdIds = memberships
        .map(m => m.householdId)
        .filter((id): id is string => !!id)
      let households: Household[] = []
      if (householdIds.length > 0) {
        households = await oops.filterHousehold({
          criteria: [{
            fieldName: HouseholdIndexedFields.Id,
            operator: ApiPiConditionOperator.In,
            value: householdIds,
          }],
          fields: [
            HouseholdFields.Id,
            HouseholdFields.Name,
            HouseholdFields.OwnerId,
            HouseholdFields.InviteCode,
            HouseholdFields.CreatedAt,
          ],
        })
      }
      const map = new Map(households.map(h => [h.id, h]))
      setRows(memberships.map(m => ({
        membership: m,
        household: m.householdId ? map.get(m.householdId) : undefined,
      })))
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      setRows([])
    }
  }

  useEffect(() => { void load() }, [])

  async function createHousehold(name: string) {
    if (!user) return
    const now = new Date().toISOString()
    const code = inviteCode()
    const created = await oops.createHousehold({
      name,
      ownerId: user.sub,
      inviteCode: code,
      createdAt: now,
    })
    const householdId = created.ids?.[0]
    if (!householdId) throw new Error('Backend did not return household id')
    await oops.createMembership({
      householdId,
      userId: user.sub,
      role: MembershipRole.Owner as never,
      joinedAt: now,
    })
    setShowCreate(false)
    onPick(householdId, name)
  }

  async function joinHousehold(code: string) {
    if (!user) return
    const matches = await oops.filterHousehold({
      criteria: [{
        fieldName: HouseholdIndexedFields.InviteCode,
        operator: ApiPiConditionOperator.Equal,
        value: code.trim().toUpperCase(),
      }],
      fields: [HouseholdFields.Id, HouseholdFields.Name, HouseholdFields.InviteCode],
    })
    const target = matches[0]
    if (!target?.id) throw new Error('No household found with that code.')
    await oops.createMembership({
      householdId: target.id,
      userId: user.sub,
      role: MembershipRole.Member as never,
      joinedAt: new Date().toISOString(),
    })
    setShowJoin(false)
    onPick(target.id, target.name ?? 'Household')
  }

  return (
    <>
      <div className="brand-line">
        <span className="brand">oops_no_milk</span>
        <button className="btn-ghost" onClick={logout}>Log out</button>
      </div>
      <p className="subtitle">
        Hi {user?.name ?? user?.sub ?? 'friend'}. Pick a household — or start one.
      </p>

      {error && <div className="error">{error}</div>}

      {rows === null ? (
        <div className="center"><span className="spinner" /></div>
      ) : rows.length === 0 ? (
        <div className="empty-state">{noHouseholdLine()}</div>
      ) : (
        rows.map(r => (
          <div
            key={r.membership.id}
            className="household-row"
            onClick={() => r.household?.id && onPick(r.household.id, r.household.name ?? 'Household')}
          >
            <div>
              <div className="name">{r.household?.name ?? '(unknown)'}</div>
              <div className="role">
                {r.membership.role === MembershipRole.Owner ? 'owner' : 'member'}
                {r.household?.inviteCode && <> · <span className="invite-pill">{r.household.inviteCode}</span></>}
              </div>
            </div>
            <span style={{ color: 'var(--accent)' }}>&rarr;</span>
          </div>
        ))
      )}

      <div style={{ display: 'grid', gap: '0.5rem', marginTop: '1.5rem' }}>
        <button className="btn-primary btn-block" onClick={() => setShowCreate(true)}>
          + Start a new household
        </button>
        <button className="btn-secondary btn-block" onClick={() => setShowJoin(true)}>
          Join with invite code
        </button>
      </div>

      {showCreate && <CreateModal onCancel={() => setShowCreate(false)} onCreate={createHousehold} />}
      {showJoin && <JoinModal onCancel={() => setShowJoin(false)} onJoin={joinHousehold} />}
    </>
  )
}

function CreateModal({ onCancel, onCreate }: { onCancel: () => void; onCreate: (name: string) => Promise<void> }) {
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  async function submit() {
    if (!name.trim()) return
    setBusy(true)
    setErr(null)
    try { await onCreate(name.trim()) }
    catch (e) { setErr(e instanceof Error ? e.message : String(e)) }
    finally { setBusy(false) }
  }

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Name the new household</h3>
        {err && <div className="error">{err}</div>}
        <input
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="The Garcias, Apt 4B, Roommate Hellscape..."
          style={{ width: '100%' }}
          onKeyDown={e => { if (e.key === 'Enter') void submit() }}
        />
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onCancel} disabled={busy}>Cancel</button>
          <button className="btn-primary" onClick={submit} disabled={busy || !name.trim()} style={{ flex: 1 }}>
            {busy ? <span className="spinner" /> : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}

function JoinModal({ onCancel, onJoin }: { onCancel: () => void; onJoin: (code: string) => Promise<void> }) {
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  async function submit() {
    if (!code.trim()) return
    setBusy(true)
    setErr(null)
    try { await onJoin(code) }
    catch (e) { setErr(e instanceof Error ? e.message : String(e)) }
    finally { setBusy(false) }
  }

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Join a household</h3>
        {err && <div className="error">{err}</div>}
        <input
          autoFocus
          value={code}
          onChange={e => setCode(e.target.value.toUpperCase())}
          placeholder="MILK-XXXX"
          style={{ width: '100%', fontFamily: 'JetBrains Mono, ui-monospace, monospace', letterSpacing: '0.1em' }}
          onKeyDown={e => { if (e.key === 'Enter') void submit() }}
        />
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onCancel} disabled={busy}>Cancel</button>
          <button className="btn-primary" onClick={submit} disabled={busy || !code.trim()} style={{ flex: 1 }}>
            {busy ? <span className="spinner" /> : 'Join'}
          </button>
        </div>
      </div>
    </div>
  )
}
