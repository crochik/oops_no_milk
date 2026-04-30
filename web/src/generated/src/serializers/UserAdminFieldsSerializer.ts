// Import enum
import { UserAdminFields } from '../models/UserAdminFields';

/**
 * Serializer for UserAdminFields enum - handles JSON serialization and deserialization
 */
export class UserAdminFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserAdminFields enum value
   */
  static deserialize(json: string): UserAdminFields {
    const value = JSON.parse(json);
    return value as UserAdminFields;
  }

  /**
   * Converts a plain value to UserAdminFields enum
   */
  static fromObject(obj: any): UserAdminFields {
    return obj as UserAdminFields;
  }

  /**
   * Serializes a UserAdminFields enum value to a JSON string
   */
  static serialize(instance: UserAdminFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserAdminFields enum value to a plain value
   */
  static toObject(instance: UserAdminFields): any {
    return instance;
  }
}
