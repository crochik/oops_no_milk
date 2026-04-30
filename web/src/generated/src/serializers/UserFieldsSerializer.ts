// Import enum
import { UserFields } from '../models/UserFields';

/**
 * Serializer for UserFields enum - handles JSON serialization and deserialization
 */
export class UserFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserFields enum value
   */
  static deserialize(json: string): UserFields {
    const value = JSON.parse(json);
    return value as UserFields;
  }

  /**
   * Converts a plain value to UserFields enum
   */
  static fromObject(obj: any): UserFields {
    return obj as UserFields;
  }

  /**
   * Serializes a UserFields enum value to a JSON string
   */
  static serialize(instance: UserFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserFields enum value to a plain value
   */
  static toObject(instance: UserFields): any {
    return instance;
  }
}
