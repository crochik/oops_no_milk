// Import model
import { Household } from '../models/Household';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for Household - handles JSON serialization and deserialization with type validation
 */
export class HouseholdSerializer {
  /**
   * Deserializes a JSON string into a Household instance
   */
  static deserialize(json: string): Household {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a Household instance
   */
  static fromObject(obj: any): Household {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to Household');
    }


    const instance: Household = {
      id: obj['_id'] as string | undefined,
      name: obj['name'] as string | undefined,
      ownerId: obj['ownerId'] as string | undefined,
      inviteCode: obj['inviteCode'] as string | undefined,
      createdAt: obj['createdAt'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of Household instances
   */
  static deserializeArray(json: string): Household[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a Household instance to a JSON string
   */
  static serialize(instance: Household): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a Household instance to a plain object
   */
  static toObject(instance: Household): any {
    return {
      '_id': instance.id,
      'name': instance.name,
      'ownerId': instance.ownerId,
      'inviteCode': instance.inviteCode,
      'createdAt': instance.createdAt,
    };
  }

  /**
   * Serializes an array of Household instances to a JSON string
   */
  static serializeArray(instances: Household[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
