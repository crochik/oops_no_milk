import { User } from './User';
import { Entity } from './Entity';
import { EntityIdentity } from './EntityIdentity';
import { EntityT } from './EntityT';
import { Notification } from './Notification';
import { Organization } from './Organization';
import { UserManagerAppProfilesInspireNetMobileProductSelector } from './UserManagerAppProfilesInspireNetMobileProductSelector';
import { UserRole } from './UserRole';

/**
 * Manager
 */
export interface UserManager extends User {
  appProfilesInspireNetMobileProductSelector?: UserManagerAppProfilesInspireNetMobileProductSelector;
}
