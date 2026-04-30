// Import enum
import { EntityFields } from '../models/EntityFields';

/**
 * Serializer for EntityFields enum - handles JSON serialization and deserialization
 */
export class EntityFieldsSerializer {
  /**
   * Deserializes a JSON string into a EntityFields enum value
   */
  static deserialize(json: string): EntityFields {
    const value = JSON.parse(json);
    return value as EntityFields;
  }

  /**
   * Converts a plain value to EntityFields enum
   */
  static fromObject(obj: any): EntityFields {
    return obj as EntityFields;
  }

  /**
   * Serializes a EntityFields enum value to a JSON string
   */
  static serialize(instance: EntityFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a EntityFields enum value to a plain value
   */
  static toObject(instance: EntityFields): any {
    return instance;
  }
}
