// Import model
import { CreateCreateHouseholdInputRequest } from '../models/CreateCreateHouseholdInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateCreateHouseholdInputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateCreateHouseholdInputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateCreateHouseholdInputRequest instance
   */
  static deserialize(json: string): CreateCreateHouseholdInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateCreateHouseholdInputRequest instance
   */
  static fromObject(obj: any): CreateCreateHouseholdInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateCreateHouseholdInputRequest');
    }


    const instance: CreateCreateHouseholdInputRequest = {
      name: obj['name'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateCreateHouseholdInputRequest instances
   */
  static deserializeArray(json: string): CreateCreateHouseholdInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateCreateHouseholdInputRequest instance to a JSON string
   */
  static serialize(instance: CreateCreateHouseholdInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateCreateHouseholdInputRequest instance to a plain object
   */
  static toObject(instance: CreateCreateHouseholdInputRequest): any {
    return {
      'name': instance.name,
    };
  }

  /**
   * Serializes an array of CreateCreateHouseholdInputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateCreateHouseholdInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
