// Import enum
import { ItemSection } from '../models/ItemSection';

/**
 * Serializer for ItemSection enum - handles JSON serialization and deserialization
 */
export class ItemSectionSerializer {
  /**
   * Deserializes a JSON string into a ItemSection enum value
   */
  static deserialize(json: string): ItemSection {
    const value = JSON.parse(json);
    return value as ItemSection;
  }

  /**
   * Converts a plain value to ItemSection enum
   */
  static fromObject(obj: any): ItemSection {
    return obj as ItemSection;
  }

  /**
   * Serializes a ItemSection enum value to a JSON string
   */
  static serialize(instance: ItemSection): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ItemSection enum value to a plain value
   */
  static toObject(instance: ItemSection): any {
    return instance;
  }
}
