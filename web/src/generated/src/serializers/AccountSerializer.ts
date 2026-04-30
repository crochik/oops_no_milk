// Import model
import { Account } from '../models/Account';

// Import base class serializer
import { EntitySerializer } from './EntitySerializer';

// Import dependency types (models and enums used in properties)
import { EntityIdentity } from '../models/EntityIdentity';
import { EntityT } from '../models/EntityT';

// Import dependency serializers (for complex types)
import { EntityIdentitySerializer } from './EntityIdentitySerializer';
import { EntityTSerializer } from './EntityTSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for Account - handles JSON serialization and deserialization with type validation
 */
export class AccountSerializer {
  /**
   * Deserializes a JSON string into a Account instance
   */
  static deserialize(json: string): Account {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a Account instance
   */
  static fromObject(obj: any): Account {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to Account');
    }


    const instance: Account = {
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
      _83Bb62Dd: obj['_83bb62dd'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of Account instances
   */
  static deserializeArray(json: string): Account[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a Account instance to a JSON string
   */
  static serialize(instance: Account): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a Account instance to a plain object
   */
  static toObject(instance: Account): any {
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
      '_83bb62dd': instance._83Bb62Dd,
    };
  }

  /**
   * Serializes an array of Account instances to a JSON string
   */
  static serializeArray(instances: Account[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
