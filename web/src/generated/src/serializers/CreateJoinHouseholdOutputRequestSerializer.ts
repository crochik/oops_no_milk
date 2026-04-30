// Import model
import { CreateJoinHouseholdOutputRequest } from '../models/CreateJoinHouseholdOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateJoinHouseholdOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateJoinHouseholdOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateJoinHouseholdOutputRequest instance
   */
  static deserialize(json: string): CreateJoinHouseholdOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateJoinHouseholdOutputRequest instance
   */
  static fromObject(obj: any): CreateJoinHouseholdOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateJoinHouseholdOutputRequest');
    }


    const instance: CreateJoinHouseholdOutputRequest = {
      householdId: obj['householdId'] as string,
      membershipId: obj['membershipId'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateJoinHouseholdOutputRequest instances
   */
  static deserializeArray(json: string): CreateJoinHouseholdOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateJoinHouseholdOutputRequest instance to a JSON string
   */
  static serialize(instance: CreateJoinHouseholdOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateJoinHouseholdOutputRequest instance to a plain object
   */
  static toObject(instance: CreateJoinHouseholdOutputRequest): any {
    return {
      'householdId': instance.householdId,
      'membershipId': instance.membershipId,
    };
  }

  /**
   * Serializes an array of CreateJoinHouseholdOutputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateJoinHouseholdOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
