// Import model
import { CreateHouseholdRequest } from '../models/CreateHouseholdRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateHouseholdRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateHouseholdRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateHouseholdRequest instance
   */
  static deserialize(json: string): CreateHouseholdRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateHouseholdRequest instance
   */
  static fromObject(obj: any): CreateHouseholdRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateHouseholdRequest');
    }


    const instance: CreateHouseholdRequest = {
      id: obj['_id'] as string | undefined,
      name: obj['name'] as string,
      ownerId: obj['ownerId'] as string,
      inviteCode: obj['inviteCode'] as string,
      createdAt: obj['createdAt'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateHouseholdRequest instances
   */
  static deserializeArray(json: string): CreateHouseholdRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateHouseholdRequest instance to a JSON string
   */
  static serialize(instance: CreateHouseholdRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateHouseholdRequest instance to a plain object
   */
  static toObject(instance: CreateHouseholdRequest): any {
    return {
      '_id': instance.id,
      'name': instance.name,
      'ownerId': instance.ownerId,
      'inviteCode': instance.inviteCode,
      'createdAt': instance.createdAt,
    };
  }

  /**
   * Serializes an array of CreateHouseholdRequest instances to a JSON string
   */
  static serializeArray(instances: CreateHouseholdRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
