// Import enum
import { UpdateMarkPurchasedOutputRequestStatus } from '../models/UpdateMarkPurchasedOutputRequestStatus';

/**
 * Serializer for UpdateMarkPurchasedOutputRequestStatus enum - handles JSON serialization and deserialization
 */
export class UpdateMarkPurchasedOutputRequestStatusSerializer {
  /**
   * Deserializes a JSON string into a UpdateMarkPurchasedOutputRequestStatus enum value
   */
  static deserialize(json: string): UpdateMarkPurchasedOutputRequestStatus {
    const value = JSON.parse(json);
    return value as UpdateMarkPurchasedOutputRequestStatus;
  }

  /**
   * Converts a plain value to UpdateMarkPurchasedOutputRequestStatus enum
   */
  static fromObject(obj: any): UpdateMarkPurchasedOutputRequestStatus {
    return obj as UpdateMarkPurchasedOutputRequestStatus;
  }

  /**
   * Serializes a UpdateMarkPurchasedOutputRequestStatus enum value to a JSON string
   */
  static serialize(instance: UpdateMarkPurchasedOutputRequestStatus): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a UpdateMarkPurchasedOutputRequestStatus enum value to a plain value
   */
  static toObject(instance: UpdateMarkPurchasedOutputRequestStatus): any {
    return instance;
  }
}
