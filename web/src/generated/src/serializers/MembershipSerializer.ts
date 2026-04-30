// Import model
import { Membership } from '../models/Membership';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { MembershipRole } from '../models/MembershipRole';

// Import dependency serializers (for complex types)
import { MembershipRoleSerializer } from './MembershipRoleSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for Membership - handles JSON serialization and deserialization with type validation
 */
export class MembershipSerializer {
  /**
   * Deserializes a JSON string into a Membership instance
   */
  static deserialize(json: string): Membership {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a Membership instance
   */
  static fromObject(obj: any): Membership {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to Membership');
    }


    const instance: Membership = {
      id: obj['_id'] as string | undefined,
      householdId: obj['householdId'] as string | undefined,
      userId: obj['userId'] as string | undefined,
      role: obj['role'] as MembershipRole | undefined,
      joinedAt: obj['joinedAt'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of Membership instances
   */
  static deserializeArray(json: string): Membership[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a Membership instance to a JSON string
   */
  static serialize(instance: Membership): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a Membership instance to a plain object
   */
  static toObject(instance: Membership): any {
    return {
      '_id': instance.id,
      'householdId': instance.householdId,
      'userId': instance.userId,
      'role': instance.role,
      'joinedAt': instance.joinedAt,
    };
  }

  /**
   * Serializes an array of Membership instances to a JSON string
   */
  static serializeArray(instances: Membership[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
