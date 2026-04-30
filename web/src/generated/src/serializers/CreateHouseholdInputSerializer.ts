// Import model
import { CreateHouseholdInput } from '../models/CreateHouseholdInput';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateHouseholdInput - handles JSON serialization and deserialization with type validation
 */
export class CreateHouseholdInputSerializer {
  /**
   * Deserializes a JSON string into a CreateHouseholdInput instance
   */
  static deserialize(json: string): CreateHouseholdInput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateHouseholdInput instance
   */
  static fromObject(obj: any): CreateHouseholdInput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateHouseholdInput');
    }


    const instance: CreateHouseholdInput = {
      name: obj['name'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateHouseholdInput instances
   */
  static deserializeArray(json: string): CreateHouseholdInput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateHouseholdInput instance to a JSON string
   */
  static serialize(instance: CreateHouseholdInput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateHouseholdInput instance to a plain object
   */
  static toObject(instance: CreateHouseholdInput): any {
    return {
      'name': instance.name,
    };
  }

  /**
   * Serializes an array of CreateHouseholdInput instances to a JSON string
   */
  static serializeArray(instances: CreateHouseholdInput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
