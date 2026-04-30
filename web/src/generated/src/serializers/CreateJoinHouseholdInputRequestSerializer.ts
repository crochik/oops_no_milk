// Import model
import { CreateJoinHouseholdInputRequest } from '../models/CreateJoinHouseholdInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateJoinHouseholdInputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateJoinHouseholdInputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateJoinHouseholdInputRequest instance
   */
  static deserialize(json: string): CreateJoinHouseholdInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateJoinHouseholdInputRequest instance
   */
  static fromObject(obj: any): CreateJoinHouseholdInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateJoinHouseholdInputRequest');
    }


    const instance: CreateJoinHouseholdInputRequest = {
      inviteCode: obj['inviteCode'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateJoinHouseholdInputRequest instances
   */
  static deserializeArray(json: string): CreateJoinHouseholdInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateJoinHouseholdInputRequest instance to a JSON string
   */
  static serialize(instance: CreateJoinHouseholdInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateJoinHouseholdInputRequest instance to a plain object
   */
  static toObject(instance: CreateJoinHouseholdInputRequest): any {
    return {
      'inviteCode': instance.inviteCode,
    };
  }

  /**
   * Serializes an array of CreateJoinHouseholdInputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateJoinHouseholdInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
