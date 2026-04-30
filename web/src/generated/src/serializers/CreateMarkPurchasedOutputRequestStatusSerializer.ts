// Import enum
import { CreateMarkPurchasedOutputRequestStatus } from '../models/CreateMarkPurchasedOutputRequestStatus';

/**
 * Serializer for CreateMarkPurchasedOutputRequestStatus enum - handles JSON serialization and deserialization
 */
export class CreateMarkPurchasedOutputRequestStatusSerializer {
  /**
   * Deserializes a JSON string into a CreateMarkPurchasedOutputRequestStatus enum value
   */
  static deserialize(json: string): CreateMarkPurchasedOutputRequestStatus {
    const value = JSON.parse(json);
    return value as CreateMarkPurchasedOutputRequestStatus;
  }

  /**
   * Converts a plain value to CreateMarkPurchasedOutputRequestStatus enum
   */
  static fromObject(obj: any): CreateMarkPurchasedOutputRequestStatus {
    return obj as CreateMarkPurchasedOutputRequestStatus;
  }

  /**
   * Serializes a CreateMarkPurchasedOutputRequestStatus enum value to a JSON string
   */
  static serialize(instance: CreateMarkPurchasedOutputRequestStatus): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a CreateMarkPurchasedOutputRequestStatus enum value to a plain value
   */
  static toObject(instance: CreateMarkPurchasedOutputRequestStatus): any {
    return instance;
  }
}
