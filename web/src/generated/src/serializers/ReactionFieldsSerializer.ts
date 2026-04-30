// Import enum
import { ReactionFields } from '../models/ReactionFields';

/**
 * Serializer for ReactionFields enum - handles JSON serialization and deserialization
 */
export class ReactionFieldsSerializer {
  /**
   * Deserializes a JSON string into a ReactionFields enum value
   */
  static deserialize(json: string): ReactionFields {
    const value = JSON.parse(json);
    return value as ReactionFields;
  }

  /**
   * Converts a plain value to ReactionFields enum
   */
  static fromObject(obj: any): ReactionFields {
    return obj as ReactionFields;
  }

  /**
   * Serializes a ReactionFields enum value to a JSON string
   */
  static serialize(instance: ReactionFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ReactionFields enum value to a plain value
   */
  static toObject(instance: ReactionFields): any {
    return instance;
  }
}
