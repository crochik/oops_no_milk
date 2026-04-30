// Import model
import { Reaction } from '../models/Reaction';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for Reaction - handles JSON serialization and deserialization with type validation
 */
export class ReactionSerializer {
  /**
   * Deserializes a JSON string into a Reaction instance
   */
  static deserialize(json: string): Reaction {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a Reaction instance
   */
  static fromObject(obj: any): Reaction {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to Reaction');
    }


    const instance: Reaction = {
      id: obj['_id'] as string | undefined,
      itemId: obj['itemId'] as string | undefined,
      userId: obj['userId'] as string | undefined,
      emoji: obj['emoji'] as string | undefined,
      createdAt: obj['createdAt'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of Reaction instances
   */
  static deserializeArray(json: string): Reaction[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a Reaction instance to a JSON string
   */
  static serialize(instance: Reaction): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a Reaction instance to a plain object
   */
  static toObject(instance: Reaction): any {
    return {
      '_id': instance.id,
      'itemId': instance.itemId,
      'userId': instance.userId,
      'emoji': instance.emoji,
      'createdAt': instance.createdAt,
    };
  }

  /**
   * Serializes an array of Reaction instances to a JSON string
   */
  static serializeArray(instances: Reaction[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
