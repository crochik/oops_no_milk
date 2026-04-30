// Import model
import { UpdateCreateHouseholdInputRequest } from '../models/UpdateCreateHouseholdInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateCreateHouseholdInputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateCreateHouseholdInputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateCreateHouseholdInputRequest instance
   */
  static deserialize(json: string): UpdateCreateHouseholdInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateCreateHouseholdInputRequest instance
   */
  static fromObject(obj: any): UpdateCreateHouseholdInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateCreateHouseholdInputRequest');
    }


    const instance: UpdateCreateHouseholdInputRequest = {
      name: obj['name'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateCreateHouseholdInputRequest instances
   */
  static deserializeArray(json: string): UpdateCreateHouseholdInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateCreateHouseholdInputRequest instance to a JSON string
   */
  static serialize(instance: UpdateCreateHouseholdInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateCreateHouseholdInputRequest instance to a plain object
   */
  static toObject(instance: UpdateCreateHouseholdInputRequest): any {
    return {
      'name': instance.name,
    };
  }

  /**
   * Serializes an array of UpdateCreateHouseholdInputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateCreateHouseholdInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
