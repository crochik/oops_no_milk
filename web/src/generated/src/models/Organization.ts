import { Entity } from './Entity';
import { EntityIdentity } from './EntityIdentity';
import { EntityT } from './EntityT';
import { FciOrganizationPpaTargets } from './FciOrganizationPpaTargets';
import { Lead } from './Lead';
import { OrganizationNote } from './OrganizationNote';
import { OrganizationPromos } from './OrganizationPromos';
import { User } from './User';
import { ZeeTerritory } from './ZeeTerritory';

/**
 * Organization
 */
export interface Organization extends Entity {
  address: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  location?: any;
  locationDistance?: any;
  businessPlanRemoteFileId?: string;
  businessPlanRemoteFileIdName?: string;
  fciSfTerritoryId?: string;
  fciSfTerritoryIdName?: string;
  branchNumber?: string;
  fciIsPpa?: boolean;
  fciIsPpl?: boolean;
  propertiesLuminOptOut?: boolean;
  propertiesConfirmationEmailsOptOut?: boolean;
  propertiesUnlayerTemplateId?: string;
  propertiesUnlayerTemplateIdName?: string;
  propertiesLiftifyOptIn?: boolean;
  propertiesHomeAdvisorId?: string;
  propertiesTerritoryByDistanceOptOut?: boolean;
  propertiesSendSchedulerSms?: boolean;
  callcenterInfo?: string;
  whoIsFci?: string;
  locationInformation?: string;
  tags?: string[];
  identitiesSalesforceMain?: any;
  identitiesCompanyCamCompanyId?: any;
  identitiesQuickbooksCompanyId?: any;
  ppaTargeting?: boolean;
  /**
   * Object Type not found
   */
  ppaTargets?: FciOrganizationPpaTargets;
  /**
   * Object Type not found
   */
  promos?: OrganizationPromos;
  primaryUserId?: string;
  primaryUserIdName?: string;
  marketingInfo?: MarketingInfo;
  organizationNote?: OrganizationNote[];
  lead?: Lead[];
  user?: User[];
  zeeTerritory?: ZeeTerritory[];
}
