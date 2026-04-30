// Import enum
import { UserDesignAssociateFields } from '../models/UserDesignAssociateFields';

/**
 * Serializer for UserDesignAssociateFields enum - handles JSON serialization and deserialization
 */
export class UserDesignAssociateFieldsSerializer {
  /**
   * Deserializes a JSON string into a UserDesignAssociateFields enum value
   */
  static deserialize(json: string): UserDesignAssociateFields {
    const value = JSON.parse(json);
    return value as UserDesignAssociateFields;
  }

  /**
   * Converts a plain value to UserDesignAssociateFields enum
   */
  static fromObject(obj: any): UserDesignAssociateFields {
    return obj as UserDesignAssociateFields;
  }

  /**
   * Serializes a UserDesignAssociateFields enum value to a JSON string
   */
  static serialize(instance: UserDesignAssociateFields): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserDesignAssociateFields enum value to a plain value
   */
  static toObject(instance: UserDesignAssociateFields): any {
    return instance;
  }
}
