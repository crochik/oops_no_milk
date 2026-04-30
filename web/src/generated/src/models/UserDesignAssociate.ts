import { User } from './User';
import { Entity } from './Entity';
import { EntityIdentity } from './EntityIdentity';
import { EntityT } from './EntityT';
import { Notification } from './Notification';
import { Organization } from './Organization';
import { UserDesignAssociateAppProfilesInspireNetMobileProductSelector } from './UserDesignAssociateAppProfilesInspireNetMobileProductSelector';
import { UserRole } from './UserRole';

/**
 * Design Associate
 */
export interface UserDesignAssociate extends User {
  appProfilesInspireNetMobileProductSelector?: UserDesignAssociateAppProfilesInspireNetMobileProductSelector;
}
