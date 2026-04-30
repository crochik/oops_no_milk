// Import enum
import { MembershipFields } from '../models/MembershipFields';

/**
 * Serializer for MembershipFields enum - handles JSON serialization and deserialization
 */
export class MembershipFieldsSerializer {
  /**
   * Deserializes a JSON string into a MembershipFields enum value
   */
  static deserialize(json: string): MembershipFields {
    const value = JSON.parse(json);
    return value as MembershipFields;
  }

  /**
   * Converts a plain value to MembershipFields enum
   */
  static fromObject(obj: any): MembershipFields {
    return obj as MembershipFields;
  }

  /**
   * Serializes a MembershipFields enum value to a JSON string
   */
  static serialize(instance: MembershipFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a MembershipFields enum value to a plain value
   */
  static toObject(instance: MembershipFields): any {
    return instance;
  }
}
