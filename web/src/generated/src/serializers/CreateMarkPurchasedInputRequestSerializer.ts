// Import model
import { CreateMarkPurchasedInputRequest } from '../models/CreateMarkPurchasedInputRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateMarkPurchasedInputRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateMarkPurchasedInputRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateMarkPurchasedInputRequest instance
   */
  static deserialize(json: string): CreateMarkPurchasedInputRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateMarkPurchasedInputRequest instance
   */
  static fromObject(obj: any): CreateMarkPurchasedInputRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateMarkPurchasedInputRequest');
    }


    const instance: CreateMarkPurchasedInputRequest = {
      id: obj['id'] as string,
      purchasePriceCents: obj['purchasePriceCents'] as number | undefined,
      notes: obj['notes'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateMarkPurchasedInputRequest instances
   */
  static deserializeArray(json: string): CreateMarkPurchasedInputRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateMarkPurchasedInputRequest instance to a JSON string
   */
  static serialize(instance: CreateMarkPurchasedInputRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateMarkPurchasedInputRequest instance to a plain object
   */
  static toObject(instance: CreateMarkPurchasedInputRequest): any {
    return {
      'id': instance.id,
      'purchasePriceCents': instance.purchasePriceCents,
      'notes': instance.notes,
    };
  }

  /**
   * Serializes an array of CreateMarkPurchasedInputRequest instances to a JSON string
   */
  static serializeArray(instances: CreateMarkPurchasedInputRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
