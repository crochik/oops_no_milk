// Import model
import { UpdateJoinHouseholdOutputRequest } from '../models/UpdateJoinHouseholdOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateJoinHouseholdOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateJoinHouseholdOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateJoinHouseholdOutputRequest instance
   */
  static deserialize(json: string): UpdateJoinHouseholdOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateJoinHouseholdOutputRequest instance
   */
  static fromObject(obj: any): UpdateJoinHouseholdOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateJoinHouseholdOutputRequest');
    }


    const instance: UpdateJoinHouseholdOutputRequest = {
      householdId: obj['householdId'] as string | undefined,
      membershipId: obj['membershipId'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateJoinHouseholdOutputRequest instances
   */
  static deserializeArray(json: string): UpdateJoinHouseholdOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateJoinHouseholdOutputRequest instance to a JSON string
   */
  static serialize(instance: UpdateJoinHouseholdOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateJoinHouseholdOutputRequest instance to a plain object
   */
  static toObject(instance: UpdateJoinHouseholdOutputRequest): any {
    return {
      'householdId': instance.householdId,
      'membershipId': instance.membershipId,
    };
  }

  /**
   * Serializes an array of UpdateJoinHouseholdOutputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateJoinHouseholdOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
