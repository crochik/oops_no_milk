// Import model
import { UpdateMarkPurchasedOutputRequest } from '../models/UpdateMarkPurchasedOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { UpdateMarkPurchasedOutputRequestStatus } from '../models/UpdateMarkPurchasedOutputRequestStatus';

// Import dependency serializers (for complex types)
import { UpdateMarkPurchasedOutputRequestStatusSerializer } from './UpdateMarkPurchasedOutputRequestStatusSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateMarkPurchasedOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateMarkPurchasedOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateMarkPurchasedOutputRequest instance
   */
  static deserialize(json: string): UpdateMarkPurchasedOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateMarkPurchasedOutputRequest instance
   */
  static fromObject(obj: any): UpdateMarkPurchasedOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateMarkPurchasedOutputRequest');
    }


    const instance: UpdateMarkPurchasedOutputRequest = {
      itemId: obj['itemId'] as string | undefined,
      status: obj['status'] as UpdateMarkPurchasedOutputRequestStatus | undefined,
      purchasedAt: obj['purchasedAt'] as string | undefined,
      purchasedById: obj['purchasedById'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateMarkPurchasedOutputRequest instances
   */
  static deserializeArray(json: string): UpdateMarkPurchasedOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateMarkPurchasedOutputRequest instance to a JSON string
   */
  static serialize(instance: UpdateMarkPurchasedOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateMarkPurchasedOutputRequest instance to a plain object
   */
  static toObject(instance: UpdateMarkPurchasedOutputRequest): any {
    return {
      'itemId': instance.itemId,
      'status': instance.status,
      'purchasedAt': instance.purchasedAt,
      'purchasedById': instance.purchasedById,
    };
  }

  /**
   * Serializes an array of UpdateMarkPurchasedOutputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateMarkPurchasedOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
