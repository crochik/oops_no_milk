/**
 * Role within the household. 'owner' is the user who created it; everyone else joins as 'member'. Authorization is enforced by the backend.
 */
export enum UpdateMembershipRequestRole {
  /** member */
  Member = "member",
  /** owner */
  Owner = "owner"
}
