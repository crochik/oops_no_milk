// Import model
import { MarkPurchasedInput } from '../models/MarkPurchasedInput';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for MarkPurchasedInput - handles JSON serialization and deserialization with type validation
 */
export class MarkPurchasedInputSerializer {
  /**
   * Deserializes a JSON string into a MarkPurchasedInput instance
   */
  static deserialize(json: string): MarkPurchasedInput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a MarkPurchasedInput instance
   */
  static fromObject(obj: any): MarkPurchasedInput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to MarkPurchasedInput');
    }


    const instance: MarkPurchasedInput = {
      id: obj['id'] as string | undefined,
      purchasePriceCents: obj['purchasePriceCents'] as number | undefined,
      notes: obj['notes'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of MarkPurchasedInput instances
   */
  static deserializeArray(json: string): MarkPurchasedInput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a MarkPurchasedInput instance to a JSON string
   */
  static serialize(instance: MarkPurchasedInput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a MarkPurchasedInput instance to a plain object
   */
  static toObject(instance: MarkPurchasedInput): any {
    return {
      'id': instance.id,
      'purchasePriceCents': instance.purchasePriceCents,
      'notes': instance.notes,
    };
  }

  /**
   * Serializes an array of MarkPurchasedInput instances to a JSON string
   */
  static serializeArray(instances: MarkPurchasedInput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
