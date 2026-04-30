// Import model
import { UpdateJoinHouseholdInputRequest } from '../models/UpdateJoinHouseholdInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateJoinHouseholdInputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateJoinHouseholdInputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateJoinHouseholdInputRequest instance
   */
  static deserialize(json: string): UpdateJoinHouseholdInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateJoinHouseholdInputRequest instance
   */
  static fromObject(obj: any): UpdateJoinHouseholdInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateJoinHouseholdInputRequest');
    }


    const instance: UpdateJoinHouseholdInputRequest = {
      inviteCode: obj['inviteCode'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateJoinHouseholdInputRequest instances
   */
  static deserializeArray(json: string): UpdateJoinHouseholdInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateJoinHouseholdInputRequest instance to a JSON string
   */
  static serialize(instance: UpdateJoinHouseholdInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateJoinHouseholdInputRequest instance to a plain object
   */
  static toObject(instance: UpdateJoinHouseholdInputRequest): any {
    return {
      'inviteCode': instance.inviteCode,
    };
  }

  /**
   * Serializes an array of UpdateJoinHouseholdInputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateJoinHouseholdInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
