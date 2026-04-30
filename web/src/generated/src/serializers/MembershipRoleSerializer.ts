// Import enum
import { MembershipRole } from '../models/MembershipRole';

/**
 * Serializer for MembershipRole enum - handles JSON serialization and deserialization
 */
export class MembershipRoleSerializer {
  /**
   * Deserializes a JSON string into a MembershipRole enum value
   */
  static deserialize(json: string): MembershipRole {
    const value = JSON.parse(json);
    return value as MembershipRole;
  }

  /**
   * Converts a plain value to MembershipRole enum
   */
  static fromObject(obj: any): MembershipRole {
    return obj as MembershipRole;
  }

  /**
   * Serializes a MembershipRole enum value to a JSON string
   */
  static serialize(instance: MembershipRole): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a MembershipRole enum value to a plain value
   */
  static toObject(instance: MembershipRole): any {
    return instance;
  }
}
