// Import enum
import { UserAdminIndexedFields } from '../models/UserAdminIndexedFields';

/**
 * Serializer for UserAdminIndexedFields enum - handles JSON serialization and deserialization
 */
export class UserAdminIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserAdminIndexedFields enum value
   */
  static deserialize(json: string): UserAdminIndexedFields {
    const value = JSON.parse(json);
    return value as UserAdminIndexedFields;
  }

  /**
   * Converts a plain value to UserAdminIndexedFields enum
   */
  static fromObject(obj: any): UserAdminIndexedFields {
    return obj as UserAdminIndexedFields;
  }

  /**
   * Serializes a UserAdminIndexedFields enum value to a JSON string
   */
  static serialize(instance: UserAdminIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserAdminIndexedFields enum value to a plain value
   */
  static toObject(instance: UserAdminIndexedFields): any {
    return instance;
  }
}
