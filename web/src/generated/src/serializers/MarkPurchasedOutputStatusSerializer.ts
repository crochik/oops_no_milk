// Import enum
import { MarkPurchasedOutputStatus } from '../models/MarkPurchasedOutputStatus';

/**
 * Serializer for MarkPurchasedOutputStatus enum - handles JSON serialization and deserialization
 */
export class MarkPurchasedOutputStatusSerializer {
  /**
   * Deserializes a JSON string into a MarkPurchasedOutputStatus enum value
   */
  static deserialize(json: string): MarkPurchasedOutputStatus {
    const value = JSON.parse(json);
    return value as MarkPurchasedOutputStatus;
  }

  /**
   * Converts a plain value to MarkPurchasedOutputStatus enum
   */
  static fromObject(obj: any): MarkPurchasedOutputStatus {
    return obj as MarkPurchasedOutputStatus;
  }

  /**
   * Serializes a MarkPurchasedOutputStatus enum value to a JSON string
   */
  static serialize(instance: MarkPurchasedOutputStatus): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a MarkPurchasedOutputStatus enum value to a plain value
   */
  static toObject(instance: MarkPurchasedOutputStatus): any {
    return instance;
  }
}
