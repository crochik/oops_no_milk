// Import enum
import { UserRole } from '../models/UserRole';

/**
 * Serializer for UserRole enum - handles JSON serialization and deserialization
 */
export class UserRoleSerializer {
  /**
   * Deserializes a JSON string into a UserRole enum value
   */
  static deserialize(json: string): UserRole {
    const value = JSON.parse(json);
    return value as UserRole;
  }

  /**
   * Converts a plain value to UserRole enum
   */
  static fromObject(obj: any): UserRole {
    return obj as UserRole;
  }

  /**
   * Serializes a UserRole enum value to a JSON string
   */
  static serialize(instance: UserRole): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserRole enum value to a plain value
   */
  static toObject(instance: UserRole): any {
    return instance;
  }
}
