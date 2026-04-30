// Import model
import { UpdateEscalateStaleItemsInputRequest } from '../models/UpdateEscalateStaleItemsInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateEscalateStaleItemsInputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateEscalateStaleItemsInputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateEscalateStaleItemsInputRequest instance
   */
  static deserialize(json: string): UpdateEscalateStaleItemsInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateEscalateStaleItemsInputRequest instance
   */
  static fromObject(obj: any): UpdateEscalateStaleItemsInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateEscalateStaleItemsInputRequest');
    }


    const instance: UpdateEscalateStaleItemsInputRequest = {
      householdId: obj['householdId'] as string | undefined,
      staleAfterHours: obj['staleAfterHours'] as number | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateEscalateStaleItemsInputRequest instances
   */
  static deserializeArray(json: string): UpdateEscalateStaleItemsInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateEscalateStaleItemsInputRequest instance to a JSON string
   */
  static serialize(instance: UpdateEscalateStaleItemsInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateEscalateStaleItemsInputRequest instance to a plain object
   */
  static toObject(instance: UpdateEscalateStaleItemsInputRequest): any {
    return {
      'householdId': instance.householdId,
      'staleAfterHours': instance.staleAfterHours,
    };
  }

  /**
   * Serializes an array of UpdateEscalateStaleItemsInputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateEscalateStaleItemsInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
