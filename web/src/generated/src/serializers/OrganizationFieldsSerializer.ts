// Import enum
import { OrganizationFields } from '../models/OrganizationFields';

/**
 * Serializer for OrganizationFields enum - handles JSON serialization and deserialization
 */
export class OrganizationFieldsSerializer {
  /**
   * Deserializes a JSON string into a OrganizationFields enum value
   */
  static deserialize(json: string): OrganizationFields {
    const value = JSON.parse(json);
    return value as OrganizationFields;
  }

  /**
   * Converts a plain value to OrganizationFields enum
   */
  static fromObject(obj: any): OrganizationFields {
    return obj as OrganizationFields;
  }

  /**
   * Serializes a OrganizationFields enum value to a JSON string
   */
  static serialize(instance: OrganizationFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a OrganizationFields enum value to a plain value
   */
  static toObject(instance: OrganizationFields): any {
    return instance;
  }
}
