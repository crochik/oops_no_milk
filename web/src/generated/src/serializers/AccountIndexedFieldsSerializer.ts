// Import enum
import { AccountIndexedFields } from '../models/AccountIndexedFields';

/**
 * Serializer for AccountIndexedFields enum - handles JSON serialization and deserialization
 */
export class AccountIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a AccountIndexedFields enum value
   */
  static deserialize(json: string): AccountIndexedFields {
    const value = JSON.parse(json);
    return value as AccountIndexedFields;
  }

  /**
   * Converts a plain value to AccountIndexedFields enum
   */
  static fromObject(obj: any): AccountIndexedFields {
    return obj as AccountIndexedFields;
  }

  /**
   * Serializes a AccountIndexedFields enum value to a JSON string
   */
  static serialize(instance: AccountIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a AccountIndexedFields enum value to a plain value
   */
  static toObject(instance: AccountIndexedFields): any {
    return instance;
  }
}
