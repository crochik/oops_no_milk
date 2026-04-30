// Import model
import { EscalateStaleItemsOutput } from '../models/EscalateStaleItemsOutput';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for EscalateStaleItemsOutput - handles JSON serialization and deserialization with type validation
 */
export class EscalateStaleItemsOutputSerializer {
  /**
   * Deserializes a JSON string into a EscalateStaleItemsOutput instance
   */
  static deserialize(json: string): EscalateStaleItemsOutput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a EscalateStaleItemsOutput instance
   */
  static fromObject(obj: any): EscalateStaleItemsOutput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to EscalateStaleItemsOutput');
    }


    const instance: EscalateStaleItemsOutput = {
      escalatedCount: obj['escalatedCount'] as number | undefined,
      escalatedItemIds: obj['escalatedItemIds'] ? (obj['escalatedItemIds'] as any[]).map((item: any) =>
        item as string
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of EscalateStaleItemsOutput instances
   */
  static deserializeArray(json: string): EscalateStaleItemsOutput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a EscalateStaleItemsOutput instance to a JSON string
   */
  static serialize(instance: EscalateStaleItemsOutput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a EscalateStaleItemsOutput instance to a plain object
   */
  static toObject(instance: EscalateStaleItemsOutput): any {
    return {
      'escalatedCount': instance.escalatedCount,
      'escalatedItemIds': instance.escalatedItemIds?.map((item: any) =>
        item
      ),
    };
  }

  /**
   * Serializes an array of EscalateStaleItemsOutput instances to a JSON string
   */
  static serializeArray(instances: EscalateStaleItemsOutput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
