// Import model
import { UpdateCreateHouseholdOutputRequest } from '../models/UpdateCreateHouseholdOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateCreateHouseholdOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateCreateHouseholdOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateCreateHouseholdOutputRequest instance
   */
  static deserialize(json: string): UpdateCreateHouseholdOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateCreateHouseholdOutputRequest instance
   */
  static fromObject(obj: any): UpdateCreateHouseholdOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateCreateHouseholdOutputRequest');
    }


    const instance: UpdateCreateHouseholdOutputRequest = {
      householdId: obj['householdId'] as string | undefined,
      inviteCode: obj['inviteCode'] as string | undefined,
      membershipId: obj['membershipId'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateCreateHouseholdOutputRequest instances
   */
  static deserializeArray(json: string): UpdateCreateHouseholdOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateCreateHouseholdOutputRequest instance to a JSON string
   */
  static serialize(instance: UpdateCreateHouseholdOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateCreateHouseholdOutputRequest instance to a plain object
   */
  static toObject(instance: UpdateCreateHouseholdOutputRequest): any {
    return {
      'householdId': instance.householdId,
      'inviteCode': instance.inviteCode,
      'membershipId': instance.membershipId,
    };
  }

  /**
   * Serializes an array of UpdateCreateHouseholdOutputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateCreateHouseholdOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
