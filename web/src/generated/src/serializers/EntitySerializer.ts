// Import model
import { Entity } from '../models/Entity';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { EntityIdentity } from '../models/EntityIdentity';
import { EntityT } from '../models/EntityT';

// Import dependency serializers (for complex types)
import { EntityIdentitySerializer } from './EntityIdentitySerializer';
import { EntityTSerializer } from './EntityTSerializer';

// Import derived type serializers (for polymorphic deserialization)
import { UserSerializer } from './UserSerializer';
import { OrganizationSerializer } from './OrganizationSerializer';
import { AccountSerializer } from './AccountSerializer';

/**
 * Serializer for Entity - handles JSON serialization and deserialization with type validation
 */
export class EntitySerializer {
  /**
   * Deserializes a JSON string into a Entity instance
   */
  static deserialize(json: string): Entity {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a Entity instance
   */
  static fromObject(obj: any): Entity {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to Entity');
    }

    // Handle polymorphic deserialization using discriminator
    const discriminator = obj['_t'];

    switch (discriminator) {
      case 'Organization':
        return OrganizationSerializer.fromObject(obj);
      case 'User':
        return UserSerializer.fromObject(obj);
      case 'Account':
        return AccountSerializer.fromObject(obj);
      default:
        // Fall through to base type deserialization
        break;
    }

    const instance: Entity = {
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
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of Entity instances
   */
  static deserializeArray(json: string): Entity[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a Entity instance to a JSON string
   */
  static serialize(instance: Entity): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a Entity instance to a plain object
   */
  static toObject(instance: Entity): any {
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
    };
  }

  /**
   * Serializes an array of Entity instances to a JSON string
   */
  static serializeArray(instances: Entity[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
