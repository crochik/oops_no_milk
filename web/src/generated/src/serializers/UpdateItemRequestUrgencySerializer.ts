// Import enum
import { UpdateItemRequestUrgency } from '../models/UpdateItemRequestUrgency';

/**
 * Serializer for UpdateItemRequestUrgency enum - handles JSON serialization and deserialization
 */
export class UpdateItemRequestUrgencySerializer {
  /**
   * Deserializes a JSON string into a UpdateItemRequestUrgency enum value
   */
  static deserialize(json: string): UpdateItemRequestUrgency {
    const value = JSON.parse(json);
    return value as UpdateItemRequestUrgency;
  }

  /**
   * Converts a plain value to UpdateItemRequestUrgency enum
   */
  static fromObject(obj: any): UpdateItemRequestUrgency {
    return obj as UpdateItemRequestUrgency;
  }

  /**
   * Serializes a UpdateItemRequestUrgency enum value to a JSON string
   */
  static serialize(instance: UpdateItemRequestUrgency): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UpdateItemRequestUrgency enum value to a plain value
   */
  static toObject(instance: UpdateItemRequestUrgency): any {
    return instance;
  }
}
