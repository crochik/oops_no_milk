// Import enum
import { ItemUrgency } from '../models/ItemUrgency';

/**
 * Serializer for ItemUrgency enum - handles JSON serialization and deserialization
 */
export class ItemUrgencySerializer {
  /**
   * Deserializes a JSON string into a ItemUrgency enum value
   */
  static deserialize(json: string): ItemUrgency {
    const value = JSON.parse(json);
    return value as ItemUrgency;
  }

  /**
   * Converts a plain value to ItemUrgency enum
   */
  static fromObject(obj: any): ItemUrgency {
    return obj as ItemUrgency;
  }

  /**
   * Serializes a ItemUrgency enum value to a JSON string
   */
  static serialize(instance: ItemUrgency): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ItemUrgency enum value to a plain value
   */
  static toObject(instance: ItemUrgency): any {
    return instance;
  }
}
