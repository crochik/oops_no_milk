// Import enum
import { CreateItemRequestSection } from '../models/CreateItemRequestSection';

/**
 * Serializer for CreateItemRequestSection enum - handles JSON serialization and deserialization
 */
export class CreateItemRequestSectionSerializer {
  /**
   * Deserializes a JSON string into a CreateItemRequestSection enum value
   */
  static deserialize(json: string): CreateItemRequestSection {
    const value = JSON.parse(json);
    return value as CreateItemRequestSection;
  }

  /**
   * Converts a plain value to CreateItemRequestSection enum
   */
  static fromObject(obj: any): CreateItemRequestSection {
    return obj as CreateItemRequestSection;
  }

  /**
   * Serializes a CreateItemRequestSection enum value to a JSON string
   */
  static serialize(instance: CreateItemRequestSection): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a CreateItemRequestSection enum value to a plain value
   */
  static toObject(instance: CreateItemRequestSection): any {
    return instance;
  }
}
