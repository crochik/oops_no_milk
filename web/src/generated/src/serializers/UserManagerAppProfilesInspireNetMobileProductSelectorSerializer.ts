// Import enum
import { UserManagerAppProfilesInspireNetMobileProductSelector } from '../models/UserManagerAppProfilesInspireNetMobileProductSelector';

/**
 * Serializer for UserManagerAppProfilesInspireNetMobileProductSelector enum - handles JSON serialization and deserialization
 */
export class UserManagerAppProfilesInspireNetMobileProductSelectorSerializer {
  /**
   * Deserializes a JSON string into a UserManagerAppProfilesInspireNetMobileProductSelector enum value
   */
  static deserialize(json: string): UserManagerAppProfilesInspireNetMobileProductSelector {
    const value = JSON.parse(json);
    return value as UserManagerAppProfilesInspireNetMobileProductSelector;
  }

  /**
   * Converts a plain value to UserManagerAppProfilesInspireNetMobileProductSelector enum
   */
  static fromObject(obj: any): UserManagerAppProfilesInspireNetMobileProductSelector {
    return obj as UserManagerAppProfilesInspireNetMobileProductSelector;
  }

  /**
   * Serializes a UserManagerAppProfilesInspireNetMobileProductSelector enum value to a JSON string
   */
  static serialize(instance: UserManagerAppProfilesInspireNetMobileProductSelector): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UserManagerAppProfilesInspireNetMobileProductSelector enum value to a plain value
   */
  static toObject(instance: UserManagerAppProfilesInspireNetMobileProductSelector): any {
    return instance;
  }
}
