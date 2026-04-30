// Import enum
import { ItemFields } from '../models/ItemFields';

/**
 * Serializer for ItemFields enum - handles JSON serialization and deserialization
 */
export class ItemFieldsSerializer {
  /**
   * Deserializes a JSON string into a ItemFields enum value
   */
  static deserialize(json: string): ItemFields {
    const value = JSON.parse(json);
    return value as ItemFields;
  }

  /**
   * Converts a plain value to ItemFields enum
   */
  static fromObject(obj: any): ItemFields {
    return obj as ItemFields;
  }

  /**
   * Serializes a ItemFields enum value to a JSON string
   */
  static serialize(instance: ItemFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ItemFields enum value to a plain value
   */
  static toObject(instance: ItemFields): any {
    return instance;
  }
}
