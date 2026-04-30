// Import enum
import { CreateMembershipRequestRole } from '../models/CreateMembershipRequestRole';

/**
 * Serializer for CreateMembershipRequestRole enum - handles JSON serialization and deserialization
 */
export class CreateMembershipRequestRoleSerializer {
  /**
   * Deserializes a JSON string into a CreateMembershipRequestRole enum value
   */
  static deserialize(json: string): CreateMembershipRequestRole {
    const value = JSON.parse(json);
    return value as CreateMembershipRequestRole;
  }

  /**
   * Converts a plain value to CreateMembershipRequestRole enum
   */
  static fromObject(obj: any): CreateMembershipRequestRole {
    return obj as CreateMembershipRequestRole;
  }

  /**
   * Serializes a CreateMembershipRequestRole enum value to a JSON string
   */
  static serialize(instance: CreateMembershipRequestRole): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a CreateMembershipRequestRole enum value to a plain value
   */
  static toObject(instance: CreateMembershipRequestRole): any {
    return instance;
  }
}
