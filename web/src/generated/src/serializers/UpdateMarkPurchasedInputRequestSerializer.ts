// Import model
import { UpdateMarkPurchasedInputRequest } from '../models/UpdateMarkPurchasedInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateMarkPurchasedInputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateMarkPurchasedInputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateMarkPurchasedInputRequest instance
   */
  static deserialize(json: string): UpdateMarkPurchasedInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateMarkPurchasedInputRequest instance
   */
  static fromObject(obj: any): UpdateMarkPurchasedInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateMarkPurchasedInputRequest');
    }


    const instance: UpdateMarkPurchasedInputRequest = {
      id: obj['id'] as string | undefined,
      purchasePriceCents: obj['purchasePriceCents'] as number | undefined,
      notes: obj['notes'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateMarkPurchasedInputRequest instances
   */
  static deserializeArray(json: string): UpdateMarkPurchasedInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateMarkPurchasedInputRequest instance to a JSON string
   */
  static serialize(instance: UpdateMarkPurchasedInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateMarkPurchasedInputRequest instance to a plain object
   */
  static toObject(instance: UpdateMarkPurchasedInputRequest): any {
    return {
      'id': instance.id,
      'purchasePriceCents': instance.purchasePriceCents,
      'notes': instance.notes,
    };
  }

  /**
   * Serializes an array of UpdateMarkPurchasedInputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateMarkPurchasedInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
