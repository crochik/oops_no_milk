function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const EMPTY_LIST_LINES = [
  "Nothing on the list. Either the fridge is full or you're delusional.",
  "Empty list. Suspiciously empty. Are we sure?",
  "Zero items. Either someone's organized or someone's lying.",
  "The list is clean. The fridge probably isn't.",
  "Nothing here. Time to wing it at the store.",
]

export const CRISIS_LINES = [
  "🚨 OUT OF MILK. Drop everything.",
  "🚨 CRISIS MODE. Get to the store.",
  "🚨 This is not a drill. Move.",
  "🚨 Someone has failed this household. Fix it.",
]

export const NO_HOUSEHOLD_LINES = [
  "No households yet. Pick your roommates wisely.",
  "Start a household or join one. The choice is yours.",
  "Step 1: gather your people. Step 2: argue about milk.",
]

export function emptyListLine() { return pick(EMPTY_LIST_LINES) }
export function crisisLine() { return pick(CRISIS_LINES) }
export function noHouseholdLine() { return pick(NO_HOUSEHOLD_LINES) }

export function inviteCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let s = ''
  for (let i = 0; i < 4; i++) {
    s += alphabet[Math.floor(Math.random() * alphabet.length)]
  }
  return `MILK-${s}`
}
