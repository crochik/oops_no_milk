// Import enum
import { UserDesignAssociateIndexedFields } from '../models/UserDesignAssociateIndexedFields';

/**
 * Serializer for UserDesignAssociateIndexedFields enum - handles JSON serialization and deserialization
 */
export class UserDesignAssociateIndexedFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserDesignAssociateIndexedFields enum value
   */
  static deserialize(json: string): UserDesignAssociateIndexedFields {
    const value = JSON.parse(json);
    return value as UserDesignAssociateIndexedFields;
  }

  /**
   * Converts a plain value to UserDesignAssociateIndexedFields enum
   */
  static fromObject(obj: any): UserDesignAssociateIndexedFields {
    return obj as UserDesignAssociateIndexedFields;
  }

  /**
   * Serializes a UserDesignAssociateIndexedFields enum value to a JSON string
   */
  static serialize(instance: UserDesignAssociateIndexedFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserDesignAssociateIndexedFields enum value to a plain value
   */
  static toObject(instance: UserDesignAssociateIndexedFields): any {
    return instance;
  }
}
