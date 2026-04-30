// Import model
import { CreateEscalateStaleItemsInputRequest } from '../models/CreateEscalateStaleItemsInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateEscalateStaleItemsInputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateEscalateStaleItemsInputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateEscalateStaleItemsInputRequest instance
   */
  static deserialize(json: string): CreateEscalateStaleItemsInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateEscalateStaleItemsInputRequest instance
   */
  static fromObject(obj: any): CreateEscalateStaleItemsInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateEscalateStaleItemsInputRequest');
    }


    const instance: CreateEscalateStaleItemsInputRequest = {
      householdId: obj['householdId'] as string,
      staleAfterHours: obj['staleAfterHours'] as number | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateEscalateStaleItemsInputRequest instances
   */
  static deserializeArray(json: string): CreateEscalateStaleItemsInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateEscalateStaleItemsInputRequest instance to a JSON string
   */
  static serialize(instance: CreateEscalateStaleItemsInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateEscalateStaleItemsInputRequest instance to a plain object
   */
  static toObject(instance: CreateEscalateStaleItemsInputRequest): any {
    return {
      'householdId': instance.householdId,
      'staleAfterHours': instance.staleAfterHours,
    };
  }

  /**
   * Serializes an array of CreateEscalateStaleItemsInputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateEscalateStaleItemsInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
