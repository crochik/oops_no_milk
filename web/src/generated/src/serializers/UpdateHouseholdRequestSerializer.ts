// Import model
import { UpdateHouseholdRequest } from '../models/UpdateHouseholdRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateHouseholdRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateHouseholdRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateHouseholdRequest instance
   */
  static deserialize(json: string): UpdateHouseholdRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateHouseholdRequest instance
   */
  static fromObject(obj: any): UpdateHouseholdRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateHouseholdRequest');
    }


    const instance: UpdateHouseholdRequest = {
      id: obj['_id'] as string | undefined,
      name: obj['name'] as string | undefined,
      ownerId: obj['ownerId'] as string | undefined,
      inviteCode: obj['inviteCode'] as string | undefined,
      createdAt: obj['createdAt'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateHouseholdRequest instances
   */
  static deserializeArray(json: string): UpdateHouseholdRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateHouseholdRequest instance to a JSON string
   */
  static serialize(instance: UpdateHouseholdRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateHouseholdRequest instance to a plain object
   */
  static toObject(instance: UpdateHouseholdRequest): any {
    return {
      '_id': instance.id,
      'name': instance.name,
      'ownerId': instance.ownerId,
      'inviteCode': instance.inviteCode,
      'createdAt': instance.createdAt,
    };
  }

  /**
   * Serializes an array of UpdateHouseholdRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateHouseholdRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
