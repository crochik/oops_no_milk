// Import model
import { UpdateReactionRequest } from '../models/UpdateReactionRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateReactionRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateReactionRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateReactionRequest instance
   */
  static deserialize(json: string): UpdateReactionRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateReactionRequest instance
   */
  static fromObject(obj: any): UpdateReactionRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateReactionRequest');
    }


    const instance: UpdateReactionRequest = {
      id: obj['_id'] as string | undefined,
      itemId: obj['itemId'] as string | undefined,
      userId: obj['userId'] as string | undefined,
      emoji: obj['emoji'] as string | undefined,
      createdAt: obj['createdAt'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateReactionRequest instances
   */
  static deserializeArray(json: string): UpdateReactionRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateReactionRequest instance to a JSON string
   */
  static serialize(instance: UpdateReactionRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateReactionRequest instance to a plain object
   */
  static toObject(instance: UpdateReactionRequest): any {
    return {
      '_id': instance.id,
      'itemId': instance.itemId,
      'userId': instance.userId,
      'emoji': instance.emoji,
      'createdAt': instance.createdAt,
    };
  }

  /**
   * Serializes an array of UpdateReactionRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateReactionRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
