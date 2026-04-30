// Import model
import { CreateReactionRequest } from '../models/CreateReactionRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateReactionRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateReactionRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateReactionRequest instance
   */
  static deserialize(json: string): CreateReactionRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateReactionRequest instance
   */
  static fromObject(obj: any): CreateReactionRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateReactionRequest');
    }


    const instance: CreateReactionRequest = {
      id: obj['_id'] as string | undefined,
      itemId: obj['itemId'] as string,
      userId: obj['userId'] as string,
      emoji: obj['emoji'] as string,
      createdAt: obj['createdAt'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateReactionRequest instances
   */
  static deserializeArray(json: string): CreateReactionRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateReactionRequest instance to a JSON string
   */
  static serialize(instance: CreateReactionRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateReactionRequest instance to a plain object
   */
  static toObject(instance: CreateReactionRequest): any {
    return {
      '_id': instance.id,
      'itemId': instance.itemId,
      'userId': instance.userId,
      'emoji': instance.emoji,
      'createdAt': instance.createdAt,
    };
  }

  /**
   * Serializes an array of CreateReactionRequest instances to a JSON string
   */
  static serializeArray(instances: CreateReactionRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
