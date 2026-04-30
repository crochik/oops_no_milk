
/**
 * Request Body to Create A shared apartment, family, or friend group co-managing a grocery list. Holds the invite code other users redeem to join, and is the parent of every Item and Membership.
 */
export interface CreateHouseholdRequest {
  /**
   * Server-assigned UUID identifying this household.
   */
  id?: string;
  /**
   * Display name shown in the picker — e.g. 'Apt 4B', 'The Garcias', 'Roommate Hellscape'.
   */
  name: string;
  /**
   * UUID of the User who created the household. The owner has implicit admin rights enforced by the platform's group authorization.
   */
  ownerId: string;
  /**
   * Short shareable code (8-12 chars) other users redeem via the joinHousehold action to become members. Unique within the app.
   */
  inviteCode: string;
  /**
   * ISO-8601 timestamp recorded when the household was created.
   */
  createdAt: string;
}
