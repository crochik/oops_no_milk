// Import model
import { UserAdmin } from '../models/UserAdmin';

// Import base class serializer
import { UserSerializer } from './UserSerializer';

// Import dependency types (models and enums used in properties)
import { Entity } from '../models/Entity';
import { EntityIdentity } from '../models/EntityIdentity';
import { EntityT } from '../models/EntityT';
import { Notification } from '../models/Notification';
import { Organization } from '../models/Organization';
import { UserRole } from '../models/UserRole';

// Import dependency serializers (for complex types)
import { EntitySerializer } from './EntitySerializer';
import { EntityIdentitySerializer } from './EntityIdentitySerializer';
import { EntityTSerializer } from './EntityTSerializer';
import { NotificationSerializer } from './NotificationSerializer';
import { OrganizationSerializer } from './OrganizationSerializer';
import { UserRoleSerializer } from './UserRoleSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UserAdmin - handles JSON serialization and deserialization with type validation
 */
export class UserAdminSerializer {
  /**
   * Deserializes a JSON string into a UserAdmin instance
   */
  static deserialize(json: string): UserAdmin {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UserAdmin instance
   */
  static fromObject(obj: any): UserAdmin {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UserAdmin');
    }


    const instance: UserAdmin = {
      name: obj['name'] as string,
      description: obj['description'] as string,
      id: obj['_id'] as string | undefined,
      t: obj['_t'] as EntityT,
      email: obj['email'] as string | undefined,
      phone: obj['phone'] as string | undefined,
      timeZone: obj['timeZone'] as string | undefined,
      organizationId: obj['organizationId'] as string | undefined,
      organizationIdName: obj['organizationId|Name'] as string | undefined,
      isActive: obj['isActive'] as boolean | undefined,
      flowId: obj['FlowId'] as string | undefined,
      flowIdName: obj['FlowId|Name'] as string | undefined,
      objectStatusId: obj['ObjectStatusId'] as string | undefined,
      objectStatusIdName: obj['ObjectStatusId|Name'] as string | undefined,
      createdOn: obj['CreatedOn'] as string | undefined,
      lastModifiedOn: obj['LastModifiedOn'] as string | undefined,
      identities: obj['Identities'] ? (obj['Identities'] as any[]).map((item: any) =>
        EntityIdentitySerializer.fromObject(item)
      ) : [] as any,
      role: obj['role'] as UserRole,
      identitiesSalesforceMain: obj['Identities|Salesforce|Main'] as any | undefined,
      identitiesSalesforceServiceResource: obj['Identities|Salesforce|ServiceResource'] as any | undefined,
      appProfilesPi: obj['AppProfiles|PI'] as string | undefined,
      appProfilesPiName: obj['AppProfiles|PI|Name'] as string | undefined,
      appProfilesPlm: obj['AppProfiles|PLM'] as string | undefined,
      appProfilesPlmName: obj['AppProfiles|PLM|Name'] as string | undefined,
      appProfilesOtg: obj['AppProfiles|OTG'] as string | undefined,
      appProfilesOtgName: obj['AppProfiles|OTG|Name'] as string | undefined,
      appProfiles: obj['AppProfiles'] as any | undefined,
      messages: obj['Messages'] ? (obj['Messages'] as any[]).map((item: any) =>
        NotificationSerializer.fromObject(item)
      ) : [] as any,
      organization: obj['organization'] ? OrganizationSerializer.fromObject(obj['organization']) : undefined as any,
      cbf8B46B: obj['_cbf8b46b'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UserAdmin instances
   */
  static deserializeArray(json: string): UserAdmin[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UserAdmin instance to a JSON string
   */
  static serialize(instance: UserAdmin): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UserAdmin instance to a plain object
   */
  static toObject(instance: UserAdmin): any {
    return {
      'name': instance.name,
      'description': instance.description,
      '_id': instance.id,
      '_t': instance.t,
      'email': instance.email,
      'phone': instance.phone,
      'timeZone': instance.timeZone,
      'organizationId': instance.organizationId,
      'organizationId|Name': instance.organizationIdName,
      'isActive': instance.isActive,
      'FlowId': instance.flowId,
      'FlowId|Name': instance.flowIdName,
      'ObjectStatusId': instance.objectStatusId,
      'ObjectStatusId|Name': instance.objectStatusIdName,
      'CreatedOn': instance.createdOn,
      'LastModifiedOn': instance.lastModifiedOn,
      'Identities': instance.identities?.map((item: any) =>
        EntityIdentitySerializer.toObject(item)
      ),
      'role': instance.role,
      'Identities|Salesforce|Main': instance.identitiesSalesforceMain,
      'Identities|Salesforce|ServiceResource': instance.identitiesSalesforceServiceResource,
      'AppProfiles|PI': instance.appProfilesPi,
      'AppProfiles|PI|Name': instance.appProfilesPiName,
      'AppProfiles|PLM': instance.appProfilesPlm,
      'AppProfiles|PLM|Name': instance.appProfilesPlmName,
      'AppProfiles|OTG': instance.appProfilesOtg,
      'AppProfiles|OTG|Name': instance.appProfilesOtgName,
      'AppProfiles': instance.appProfiles,
      'Messages': instance.messages?.map((item: any) =>
        NotificationSerializer.toObject(item)
      ),
      'organization': instance.organization ? OrganizationSerializer.toObject(instance.organization) : undefined,
      '_cbf8b46b': instance.cbf8B46B,
    };
  }

  /**
   * Serializes an array of UserAdmin instances to a JSON string
   */
  static serializeArray(instances: UserAdmin[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
