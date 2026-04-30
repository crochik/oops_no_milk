// Import enum
import { ItemIndexedFields } from '../models/ItemIndexedFields';

/**
 * Serializer for ItemIndexedFields enum - handles JSON serialization and deserialization
 */
export class ItemIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a ItemIndexedFields enum value
   */
  static deserialize(json: string): ItemIndexedFields {
    const value = JSON.parse(json);
    return value as ItemIndexedFields;
  }

  /**
   * Converts a plain value to ItemIndexedFields enum
   */
  static fromObject(obj: any): ItemIndexedFields {
    return obj as ItemIndexedFields;
  }

  /**
   * Serializes a ItemIndexedFields enum value to a JSON string
   */
  static serialize(instance: ItemIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ItemIndexedFields enum value to a plain value
   */
  static toObject(instance: ItemIndexedFields): any {
    return instance;
  }
}
