import { Entity } from './Entity';
import { EntityIdentity } from './EntityIdentity';
import { EntityT } from './EntityT';
import { Notification } from './Notification';
import { Organization } from './Organization';
import { UserRole } from './UserRole';

/**
 * User
 */
export interface User extends Entity {
  identitiesSalesforceMain?: any;
  identitiesSalesforceServiceResource?: any;
  appProfilesPi?: string;
  appProfilesPiName?: string;
  appProfilesPlm?: string;
  appProfilesPlmName?: string;
  appProfilesOtg?: string;
  appProfilesOtgName?: string;
  appProfiles?: any;
  messages?: Notification[];
  /**
   * Organization
   */
  organization?: Organization;

  /**
   * Discriminator property
   */
  role: string;
}
