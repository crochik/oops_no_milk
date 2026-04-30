// Import model
import { CreateEscalateStaleItemsOutputRequest } from '../models/CreateEscalateStaleItemsOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateEscalateStaleItemsOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateEscalateStaleItemsOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateEscalateStaleItemsOutputRequest instance
   */
  static deserialize(json: string): CreateEscalateStaleItemsOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateEscalateStaleItemsOutputRequest instance
   */
  static fromObject(obj: any): CreateEscalateStaleItemsOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateEscalateStaleItemsOutputRequest');
    }


    const instance: CreateEscalateStaleItemsOutputRequest = {
      escalatedCount: obj['escalatedCount'] as number,
      escalatedItemIds: obj['escalatedItemIds'] ? (obj['escalatedItemIds'] as any[]).map((item: any) =>
        item as string
      ) : [],
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateEscalateStaleItemsOutputRequest instances
   */
  static deserializeArray(json: string): CreateEscalateStaleItemsOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateEscalateStaleItemsOutputRequest instance to a JSON string
   */
  static serialize(instance: CreateEscalateStaleItemsOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateEscalateStaleItemsOutputRequest instance to a plain object
   */
  static toObject(instance: CreateEscalateStaleItemsOutputRequest): any {
    return {
      'escalatedCount': instance.escalatedCount,
      'escalatedItemIds': instance.escalatedItemIds?.map((item: any) =>
        item
      ),
    };
  }

  /**
   * Serializes an array of CreateEscalateStaleItemsOutputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateEscalateStaleItemsOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
