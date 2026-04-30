// Import enum
import { AccountFields } from '../models/AccountFields';

/**
 * Serializer for AccountFields enum - handles JSON serialization and deserialization
 */
export class AccountFieldsSerializer {
  /**
   * Deserializes a JSON string into a AccountFields enum value
   */
  static deserialize(json: string): AccountFields {
    const value = JSON.parse(json);
    return value as AccountFields;
  }

  /**
   * Converts a plain value to AccountFields enum
   */
  static fromObject(obj: any): AccountFields {
    return obj as AccountFields;
  }

  /**
   * Serializes a AccountFields enum value to a JSON string
   */
  static serialize(instance: AccountFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a AccountFields enum value to a plain value
   */
  static toObject(instance: AccountFields): any {
    return instance;
  }
}
