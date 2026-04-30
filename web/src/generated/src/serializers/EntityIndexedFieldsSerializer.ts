// Import enum
import { EntityIndexedFields } from '../models/EntityIndexedFields';

/**
 * Serializer for EntityIndexedFields enum - handles JSON serialization and deserialization
 */
export class EntityIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a EntityIndexedFields enum value
   */
  static deserialize(json: string): EntityIndexedFields {
    const value = JSON.parse(json);
    return value as EntityIndexedFields;
  }

  /**
   * Converts a plain value to EntityIndexedFields enum
   */
  static fromObject(obj: any): EntityIndexedFields {
    return obj as EntityIndexedFields;
  }

  /**
   * Serializes a EntityIndexedFields enum value to a JSON string
   */
  static serialize(instance: EntityIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a EntityIndexedFields enum value to a plain value
   */
  static toObject(instance: EntityIndexedFields): any {
    return instance;
  }
}
