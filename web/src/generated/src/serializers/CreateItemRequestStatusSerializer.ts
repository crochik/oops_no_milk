// Import enum
import { CreateItemRequestStatus } from '../models/CreateItemRequestStatus';

/**
 * Serializer for CreateItemRequestStatus enum - handles JSON serialization and deserialization
 */
export class CreateItemRequestStatusSerializer {
  /**
   * Deserializes a JSON string into a CreateItemRequestStatus enum value
   */
  static deserialize(json: string): CreateItemRequestStatus {
    const value = JSON.parse(json);
    return value as CreateItemRequestStatus;
  }

  /**
   * Converts a plain value to CreateItemRequestStatus enum
   */
  static fromObject(obj: any): CreateItemRequestStatus {
    return obj as CreateItemRequestStatus;
  }

  /**
   * Serializes a CreateItemRequestStatus enum value to a JSON string
   */
  static serialize(instance: CreateItemRequestStatus): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a CreateItemRequestStatus enum value to a plain value
   */
  static toObject(instance: CreateItemRequestStatus): any {
    return instance;
  }
}
