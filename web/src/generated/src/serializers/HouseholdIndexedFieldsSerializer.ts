// Import enum
import { HouseholdIndexedFields } from '../models/HouseholdIndexedFields';

/**
 * Serializer for HouseholdIndexedFields enum - handles JSON serialization and deserialization
 */
export class HouseholdIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a HouseholdIndexedFields enum value
   */
  static deserialize(json: string): HouseholdIndexedFields {
    const value = JSON.parse(json);
    return value as HouseholdIndexedFields;
  }

  /**
   * Converts a plain value to HouseholdIndexedFields enum
   */
  static fromObject(obj: any): HouseholdIndexedFields {
    return obj as HouseholdIndexedFields;
  }

  /**
   * Serializes a HouseholdIndexedFields enum value to a JSON string
   */
  static serialize(instance: HouseholdIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a HouseholdIndexedFields enum value to a plain value
   */
  static toObject(instance: HouseholdIndexedFields): any {
    return instance;
  }
}
