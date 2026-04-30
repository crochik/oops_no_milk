// Import enum
import { UpdateItemRequestStatus } from '../models/UpdateItemRequestStatus';

/**
 * Serializer for UpdateItemRequestStatus enum - handles JSON serialization and deserialization
 */
export class UpdateItemRequestStatusSerializer {
  /**
   * Deserializes a JSON string into a UpdateItemRequestStatus enum value
   */
  static deserialize(json: string): UpdateItemRequestStatus {
    const value = JSON.parse(json);
    return value as UpdateItemRequestStatus;
  }

  /**
   * Converts a plain value to UpdateItemRequestStatus enum
   */
  static fromObject(obj: any): UpdateItemRequestStatus {
    return obj as UpdateItemRequestStatus;
  }

  /**
   * Serializes a UpdateItemRequestStatus enum value to a JSON string
   */
  static serialize(instance: UpdateItemRequestStatus): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UpdateItemRequestStatus enum value to a plain value
   */
  static toObject(instance: UpdateItemRequestStatus): any {
    return instance;
  }
}
