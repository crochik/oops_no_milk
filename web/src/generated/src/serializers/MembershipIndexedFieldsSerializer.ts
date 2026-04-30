// Import enum
import { MembershipIndexedFields } from '../models/MembershipIndexedFields';

/**
 * Serializer for MembershipIndexedFields enum - handles JSON serialization and deserialization
 */
export class MembershipIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a MembershipIndexedFields enum value
   */
  static deserialize(json: string): MembershipIndexedFields {
    const value = JSON.parse(json);
    return value as MembershipIndexedFields;
  }

  /**
   * Converts a plain value to MembershipIndexedFields enum
   */
  static fromObject(obj: any): MembershipIndexedFields {
    return obj as MembershipIndexedFields;
  }

  /**
   * Serializes a MembershipIndexedFields enum value to a JSON string
   */
  static serialize(instance: MembershipIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a MembershipIndexedFields enum value to a plain value
   */
  static toObject(instance: MembershipIndexedFields): any {
    return instance;
  }
}
