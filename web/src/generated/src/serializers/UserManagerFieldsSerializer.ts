// Import enum
import { UserManagerFields } from '../models/UserManagerFields';

/**
 * Serializer for UserManagerFields enum - handles JSON serialization and deserialization
 */
export class UserManagerFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserManagerFields enum value
   */
  static deserialize(json: string): UserManagerFields {
    const value = JSON.parse(json);
    return value as UserManagerFields;
  }

  /**
   * Converts a plain value to UserManagerFields enum
   */
  static fromObject(obj: any): UserManagerFields {
    return obj as UserManagerFields;
  }

  /**
   * Serializes a UserManagerFields enum value to a JSON string
   */
  static serialize(instance: UserManagerFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserManagerFields enum value to a plain value
   */
  static toObject(instance: UserManagerFields): any {
    return instance;
  }
}
