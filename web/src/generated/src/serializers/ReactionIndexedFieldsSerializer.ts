// Import enum
import { ReactionIndexedFields } from '../models/ReactionIndexedFields';

/**
 * Serializer for ReactionIndexedFields enum - handles JSON serialization and deserialization
 */
export class ReactionIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a ReactionIndexedFields enum value
   */
  static deserialize(json: string): ReactionIndexedFields {
    const value = JSON.parse(json);
    return value as ReactionIndexedFields;
  }

  /**
   * Converts a plain value to ReactionIndexedFields enum
   */
  static fromObject(obj: any): ReactionIndexedFields {
    return obj as ReactionIndexedFields;
  }

  /**
   * Serializes a ReactionIndexedFields enum value to a JSON string
   */
  static serialize(instance: ReactionIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ReactionIndexedFields enum value to a plain value
   */
  static toObject(instance: ReactionIndexedFields): any {
    return instance;
  }
}
