// Import enum
import { UpdateItemRequestSection } from '../models/UpdateItemRequestSection';

/**
 * Serializer for UpdateItemRequestSection enum - handles JSON serialization and deserialization
 */
export class UpdateItemRequestSectionSerializer {
  /**
   * Deserializes a JSON string into a UpdateItemRequestSection enum value
   */
  static deserialize(json: string): UpdateItemRequestSection {
    const value = JSON.parse(json);
    return value as UpdateItemRequestSection;
  }

  /**
   * Converts a plain value to UpdateItemRequestSection enum
   */
  static fromObject(obj: any): UpdateItemRequestSection {
    return obj as UpdateItemRequestSection;
  }

  /**
   * Serializes a UpdateItemRequestSection enum value to a JSON string
   */
  static serialize(instance: UpdateItemRequestSection): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UpdateItemRequestSection enum value to a plain value
   */
  static toObject(instance: UpdateItemRequestSection): any {
    return instance;
  }
}
