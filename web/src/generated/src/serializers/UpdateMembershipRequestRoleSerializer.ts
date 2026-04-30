// Import enum
import { UpdateMembershipRequestRole } from '../models/UpdateMembershipRequestRole';

/**
 * Serializer for UpdateMembershipRequestRole enum - handles JSON serialization and deserialization
 */
export class UpdateMembershipRequestRoleSerializer {
  /**
   * Deserializes a JSON string into a UpdateMembershipRequestRole enum value
   */
  static deserialize(json: string): UpdateMembershipRequestRole {
    const value = JSON.parse(json);
    return value as UpdateMembershipRequestRole;
  }

  /**
   * Converts a plain value to UpdateMembershipRequestRole enum
   */
  static fromObject(obj: any): UpdateMembershipRequestRole {
    return obj as UpdateMembershipRequestRole;
  }

  /**
   * Serializes a UpdateMembershipRequestRole enum value to a JSON string
   */
  static serialize(instance: UpdateMembershipRequestRole): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UpdateMembershipRequestRole enum value to a plain value
   */
  static toObject(instance: UpdateMembershipRequestRole): any {
    return instance;
  }
}
