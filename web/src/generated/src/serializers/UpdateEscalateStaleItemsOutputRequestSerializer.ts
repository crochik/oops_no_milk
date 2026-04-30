// Import model
import { UpdateEscalateStaleItemsOutputRequest } from '../models/UpdateEscalateStaleItemsOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateEscalateStaleItemsOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateEscalateStaleItemsOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateEscalateStaleItemsOutputRequest instance
   */
  static deserialize(json: string): UpdateEscalateStaleItemsOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateEscalateStaleItemsOutputRequest instance
   */
  static fromObject(obj: any): UpdateEscalateStaleItemsOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateEscalateStaleItemsOutputRequest');
    }


    const instance: UpdateEscalateStaleItemsOutputRequest = {
      escalatedCount: obj['escalatedCount'] as number | undefined,
      escalatedItemIds: obj['escalatedItemIds'] ? (obj['escalatedItemIds'] as any[]).map((item: any) =>
        item as string
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateEscalateStaleItemsOutputRequest instances
   */
  static deserializeArray(json: string): UpdateEscalateStaleItemsOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateEscalateStaleItemsOutputRequest instance to a JSON string
   */
  static serialize(instance: UpdateEscalateStaleItemsOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateEscalateStaleItemsOutputRequest instance to a plain object
   */
  static toObject(instance: UpdateEscalateStaleItemsOutputRequest): any {
    return {
      'escalatedCount': instance.escalatedCount,
      'escalatedItemIds': instance.escalatedItemIds?.map((item: any) =>
        item
      ),
    };
  }

  /**
   * Serializes an array of UpdateEscalateStaleItemsOutputRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateEscalateStaleItemsOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
