
/**
 * Input payload for the createHousehold action. Carries the human-readable household name; the owner is the authenticated caller and the invite code is generated server-side.
 */
export interface CreateHouseholdInput {
  /**
   * Display name for the household — e.g. 'Apt 4B', 'The Garcias'.
   */
  name?: string;
}
