// Import model
import { MarkPurchasedOutput } from '../models/MarkPurchasedOutput';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { MarkPurchasedOutputStatus } from '../models/MarkPurchasedOutputStatus';

// Import dependency serializers (for complex types)
import { MarkPurchasedOutputStatusSerializer } from './MarkPurchasedOutputStatusSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for MarkPurchasedOutput - handles JSON serialization and deserialization with type validation
 */
export class MarkPurchasedOutputSerializer {
  /**
   * Deserializes a JSON string into a MarkPurchasedOutput instance
   */
  static deserialize(json: string): MarkPurchasedOutput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a MarkPurchasedOutput instance
   */
  static fromObject(obj: any): MarkPurchasedOutput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to MarkPurchasedOutput');
    }


    const instance: MarkPurchasedOutput = {
      itemId: obj['itemId'] as string | undefined,
      status: obj['status'] as MarkPurchasedOutputStatus | undefined,
      purchasedAt: obj['purchasedAt'] as string | undefined,
      purchasedById: obj['purchasedById'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of MarkPurchasedOutput instances
   */
  static deserializeArray(json: string): MarkPurchasedOutput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a MarkPurchasedOutput instance to a JSON string
   */
  static serialize(instance: MarkPurchasedOutput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a MarkPurchasedOutput instance to a plain object
   */
  static toObject(instance: MarkPurchasedOutput): any {
    return {
      'itemId': instance.itemId,
      'status': instance.status,
      'purchasedAt': instance.purchasedAt,
      'purchasedById': instance.purchasedById,
    };
  }

  /**
   * Serializes an array of MarkPurchasedOutput instances to a JSON string
   */
  static serializeArray(instances: MarkPurchasedOutput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
