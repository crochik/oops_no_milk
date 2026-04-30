import { UpdateMembershipRequestRole } from './UpdateMembershipRequestRole';

/**
 * Request Body to Update Links a User to a Household with a role and join timestamp. Queried by userId (to list a user's households) and by householdId (to list a household's members).
 */
export interface UpdateMembershipRequest {
  /**
   * Server-assigned UUID identifying this membership row.
   */
  id?: string;
  /**
   * Reference to the Household this membership belongs to.
   */
  householdId?: string;
  /**
   * Reference to the User who is a member.
   */
  userId?: string;
  /**
   * Role within the household. 'owner' is the user who created it; everyone else joins as 'member'. Authorization is enforced by the backend.
   */
  role?: UpdateMembershipRequestRole;
  /**
   * ISO-8601 timestamp recorded when the user joined the household.
   */
  joinedAt?: string;
}
