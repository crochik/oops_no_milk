// Import enum
import { UserIndexedFields } from '../models/UserIndexedFields';

/**
 * Serializer for UserIndexedFields enum - handles JSON serialization and deserialization
 */
export class UserIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserIndexedFields enum value
   */
  static deserialize(json: string): UserIndexedFields {
    const value = JSON.parse(json);
    return value as UserIndexedFields;
  }

  /**
   * Converts a plain value to UserIndexedFields enum
   */
  static fromObject(obj: any): UserIndexedFields {
    return obj as UserIndexedFields;
  }

  /**
   * Serializes a UserIndexedFields enum value to a JSON string
   */
  static serialize(instance: UserIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserIndexedFields enum value to a plain value
   */
  static toObject(instance: UserIndexedFields): any {
    return instance;
  }
}
