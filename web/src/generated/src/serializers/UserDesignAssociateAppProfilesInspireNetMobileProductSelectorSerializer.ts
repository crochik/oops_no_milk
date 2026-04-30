// Import enum
import { UserDesignAssociateAppProfilesInspireNetMobileProductSelector } from '../models/UserDesignAssociateAppProfilesInspireNetMobileProductSelector';

/**
 * Serializer for UserDesignAssociateAppProfilesInspireNetMobileProductSelector enum - handles JSON serialization and deserialization
 */
export class UserDesignAssociateAppProfilesInspireNetMobileProductSelectorSerializer {
  /**
   * Deserializes a JSON string into a UserDesignAssociateAppProfilesInspireNetMobileProductSelector enum value
   */
  static deserialize(json: string): UserDesignAssociateAppProfilesInspireNetMobileProductSelector {
    const value = JSON.parse(json);
    return value as UserDesignAssociateAppProfilesInspireNetMobileProductSelector;
  }

  /**
   * Converts a plain value to UserDesignAssociateAppProfilesInspireNetMobileProductSelector enum
   */
  static fromObject(obj: any): UserDesignAssociateAppProfilesInspireNetMobileProductSelector {
    return obj as UserDesignAssociateAppProfilesInspireNetMobileProductSelector;
  }

  /**
   * Serializes a UserDesignAssociateAppProfilesInspireNetMobileProductSelector enum value to a JSON string
   */
  static serialize(instance: UserDesignAssociateAppProfilesInspireNetMobileProductSelector): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserDesignAssociateAppProfilesInspireNetMobileProductSelector enum value to a plain value
   */
  static toObject(instance: UserDesignAssociateAppProfilesInspireNetMobileProductSelector): any {
    return instance;
  }
}
