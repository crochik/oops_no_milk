import { EntityIdentity } from './EntityIdentity';
import { EntityT } from './EntityT';

/**
 * Entity
 */
export interface Entity {
  name: string;
  description: string;
  id?: string;
  email?: string;
  phone?: string;
  timeZone?: string;
  organizationId?: string;
  organizationIdName?: string;
  isActive?: boolean;
  flowId?: string;
  flowIdName?: string;
  objectStatusId?: string;
  objectStatusIdName?: string;
  createdOn?: string;
  lastModifiedOn?: string;
  identities?: EntityIdentity[];

  /**
   * Discriminator property
   */
  t: string;
}
