import { ItemSection } from '../generated/src'

export interface SectionMeta {
  key: ItemSection
  label: string
  emoji: string
}

export const SECTIONS: SectionMeta[] = [
  { key: ItemSection.Produce,      label: 'Produce',        emoji: '🥬' },
  { key: ItemSection.DairyEggs,    label: 'Dairy & Eggs',   emoji: '🥛' },
  { key: ItemSection.MeatSeafood,  label: 'Meat & Seafood', emoji: '🥩' },
  { key: ItemSection.Bakery,       label: 'Bakery',         emoji: '🥖' },
  { key: ItemSection.Frozen,       label: 'Frozen',         emoji: '🧊' },
  { key: ItemSection.Pantry,       label: 'Pantry',         emoji: '🥫' },
  { key: ItemSection.Beverages,    label: 'Beverages',      emoji: '🥤' },
  { key: ItemSection.Snacks,       label: 'Snacks',         emoji: '🍿' },
  { key: ItemSection.Household,    label: 'Household',      emoji: '🧻' },
  { key: ItemSection.PersonalCare, label: 'Personal Care',  emoji: '🧴' },
  { key: ItemSection.Baby,         label: 'Baby',           emoji: '🍼' },
  { key: ItemSection.Pet,          label: 'Pet',            emoji: '🐾' },
  { key: ItemSection.Other,        label: 'Other',          emoji: '🤷' },
]

export const SECTION_BY_KEY: Record<string, SectionMeta> =
  Object.fromEntries(SECTIONS.map(s => [s.key, s]))
