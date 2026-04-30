// Import model
import { CreateCreateHouseholdOutputRequest } from '../models/CreateCreateHouseholdOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateCreateHouseholdOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateCreateHouseholdOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateCreateHouseholdOutputRequest instance
   */
  static deserialize(json: string): CreateCreateHouseholdOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateCreateHouseholdOutputRequest instance
   */
  static fromObject(obj: any): CreateCreateHouseholdOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateCreateHouseholdOutputRequest');
    }


    const instance: CreateCreateHouseholdOutputRequest = {
      householdId: obj['householdId'] as string,
      inviteCode: obj['inviteCode'] as string,
      membershipId: obj['membershipId'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateCreateHouseholdOutputRequest instances
   */
  static deserializeArray(json: string): CreateCreateHouseholdOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateCreateHouseholdOutputRequest instance to a JSON string
   */
  static serialize(instance: CreateCreateHouseholdOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateCreateHouseholdOutputRequest instance to a plain object
   */
  static toObject(instance: CreateCreateHouseholdOutputRequest): any {
    return {
      'householdId': instance.householdId,
      'inviteCode': instance.inviteCode,
      'membershipId': instance.membershipId,
    };
  }

  /**
   * Serializes an array of CreateCreateHouseholdOutputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateCreateHouseholdOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
