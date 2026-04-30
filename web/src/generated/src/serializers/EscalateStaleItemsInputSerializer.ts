// Import model
import { EscalateStaleItemsInput } from '../models/EscalateStaleItemsInput';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for EscalateStaleItemsInput - handles JSON serialization and deserialization with type validation
 */
export class EscalateStaleItemsInputSerializer {
  /**
   * Deserializes a JSON string into a EscalateStaleItemsInput instance
   */
  static deserialize(json: string): EscalateStaleItemsInput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a EscalateStaleItemsInput instance
   */
  static fromObject(obj: any): EscalateStaleItemsInput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to EscalateStaleItemsInput');
    }


    const instance: EscalateStaleItemsInput = {
      householdId: obj['householdId'] as string | undefined,
      staleAfterHours: obj['staleAfterHours'] as number | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of EscalateStaleItemsInput instances
   */
  static deserializeArray(json: string): EscalateStaleItemsInput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a EscalateStaleItemsInput instance to a JSON string
   */
  static serialize(instance: EscalateStaleItemsInput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a EscalateStaleItemsInput instance to a plain object
   */
  static toObject(instance: EscalateStaleItemsInput): any {
    return {
      'householdId': instance.householdId,
      'staleAfterHours': instance.staleAfterHours,
    };
  }

  /**
   * Serializes an array of EscalateStaleItemsInput instances to a JSON string
   */
  static serializeArray(instances: EscalateStaleItemsInput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
