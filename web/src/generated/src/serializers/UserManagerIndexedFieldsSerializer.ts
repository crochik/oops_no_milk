// Import enum
import { UserManagerIndexedFields } from '../models/UserManagerIndexedFields';

/**
 * Serializer for UserManagerIndexedFields enum - handles JSON serialization and deserialization
 */
export class UserManagerIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserManagerIndexedFields enum value
   */
  static deserialize(json: string): UserManagerIndexedFields {
    const value = JSON.parse(json);
    return value as UserManagerIndexedFields;
  }

  /**
   * Converts a plain value to UserManagerIndexedFields enum
   */
  static fromObject(obj: any): UserManagerIndexedFields {
    return obj as UserManagerIndexedFields;
  }

  /**
   * Serializes a UserManagerIndexedFields enum value to a JSON string
   */
  static serialize(instance: UserManagerIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserManagerIndexedFields enum value to a plain value
   */
  static toObject(instance: UserManagerIndexedFields): any {
    return instance;
  }
}
