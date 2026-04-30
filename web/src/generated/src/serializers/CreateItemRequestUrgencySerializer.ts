// Import enum
import { CreateItemRequestUrgency } from '../models/CreateItemRequestUrgency';

/**
 * Serializer for CreateItemRequestUrgency enum - handles JSON serialization and deserialization
 */
export class CreateItemRequestUrgencySerializer {
  /**
   * Deserializes a JSON string into a CreateItemRequestUrgency enum value
   */
  static deserialize(json: string): CreateItemRequestUrgency {
    const value = JSON.parse(json);
    return value as CreateItemRequestUrgency;
  }

  /**
   * Converts a plain value to CreateItemRequestUrgency enum
   */
  static fromObject(obj: any): CreateItemRequestUrgency {
    return obj as CreateItemRequestUrgency;
  }

  /**
   * Serializes a CreateItemRequestUrgency enum value to a JSON string
   */
  static serialize(instance: CreateItemRequestUrgency): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a CreateItemRequestUrgency enum value to a plain value
   */
  static toObject(instance: CreateItemRequestUrgency): any {
    return instance;
  }
}
