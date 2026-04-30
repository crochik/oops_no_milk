// Import enum
import { ItemStatus } from '../models/ItemStatus';

/**
 * Serializer for ItemStatus enum - handles JSON serialization and deserialization
 */
export class ItemStatusSerializer {
  /**
   * Deserializes a JSON string into a ItemStatus enum value
   */
  static deserialize(json: string): ItemStatus {
    const value = JSON.parse(json);
    return value as ItemStatus;
  }

  /**
   * Converts a plain value to ItemStatus enum
   */
  static fromObject(obj: any): ItemStatus {
    return obj as ItemStatus;
  }

  /**
   * Serializes a ItemStatus enum value to a JSON string
   */
  static serialize(instance: ItemStatus): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ItemStatus enum value to a plain value
   */
  static toObject(instance: ItemStatus): any {
    return instance;
  }
}
