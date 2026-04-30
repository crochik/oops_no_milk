// Import enum
import { OrganizationIndexedFields } from '../models/OrganizationIndexedFields';

/**
 * Serializer for OrganizationIndexedFields enum - handles JSON serialization and deserialization
 */
export class OrganizationIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a OrganizationIndexedFields enum value
   */
  static deserialize(json: string): OrganizationIndexedFields {
    const value = JSON.parse(json);
    return value as OrganizationIndexedFields;
  }

  /**
   * Converts a plain value to OrganizationIndexedFields enum
   */
  static fromObject(obj: any): OrganizationIndexedFields {
    return obj as OrganizationIndexedFields;
  }

  /**
   * Serializes a OrganizationIndexedFields enum value to a JSON string
   */
  static serialize(instance: OrganizationIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a OrganizationIndexedFields enum value to a plain value
   */
  static toObject(instance: OrganizationIndexedFields): any {
    return instance;
  }
}
