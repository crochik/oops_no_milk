// Import model
import { CreateMarkPurchasedOutputRequest } from '../models/CreateMarkPurchasedOutputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { CreateMarkPurchasedOutputRequestStatus } from '../models/CreateMarkPurchasedOutputRequestStatus';

// Import dependency serializers (for complex types)
import { CreateMarkPurchasedOutputRequestStatusSerializer } from './CreateMarkPurchasedOutputRequestStatusSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateMarkPurchasedOutputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateMarkPurchasedOutputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateMarkPurchasedOutputRequest instance
   */
  static deserialize(json: string): CreateMarkPurchasedOutputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateMarkPurchasedOutputRequest instance
   */
  static fromObject(obj: any): CreateMarkPurchasedOutputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateMarkPurchasedOutputRequest');
    }


    const instance: CreateMarkPurchasedOutputRequest = {
      itemId: obj['itemId'] as string,
      status: obj['status'] as CreateMarkPurchasedOutputRequestStatus,
      purchasedAt: obj['purchasedAt'] as string,
      purchasedById: obj['purchasedById'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateMarkPurchasedOutputRequest instances
   */
  static deserializeArray(json: string): CreateMarkPurchasedOutputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateMarkPurchasedOutputRequest instance to a JSON string
   */
  static serialize(instance: CreateMarkPurchasedOutputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateMarkPurchasedOutputRequest instance to a plain object
   */
  static toObject(instance: CreateMarkPurchasedOutputRequest): any {
    return {
      'itemId': instance.itemId,
      'status': instance.status,
      'purchasedAt': instance.purchasedAt,
      'purchasedById': instance.purchasedById,
    };
  }

  /**
   * Serializes an array of CreateMarkPurchasedOutputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateMarkPurchasedOutputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
