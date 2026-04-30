// Import enum
import { HouseholdFields } from '../models/HouseholdFields';

/**
 * Serializer for HouseholdFields enum - handles JSON serialization and deserialization
 */
export class HouseholdFieldsSerializer {
  /**
   * Deserializes a JSON string into a HouseholdFields enum value
   */
  static deserialize(json: string): HouseholdFields {
    const value = JSON.parse(json);
    return value as HouseholdFields;
  }

  /**
   * Converts a plain value to HouseholdFields enum
   */
  static fromObject(obj: any): HouseholdFields {
    return obj as HouseholdFields;
  }

  /**
   * Serializes a HouseholdFields enum value to a JSON string
   */
  static serialize(instance: HouseholdFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a HouseholdFields enum value to a plain value
   */
  static toObject(instance: HouseholdFields): any {
    return instance;
  }
}
