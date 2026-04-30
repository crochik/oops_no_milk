// Import model
import { UpdateMembershipRequest } from '../models/UpdateMembershipRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { UpdateMembershipRequestRole } from '../models/UpdateMembershipRequestRole';

// Import dependency serializers (for complex types)
import { UpdateMembershipRequestRoleSerializer } from './UpdateMembershipRequestRoleSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateMembershipRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateMembershipRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateMembershipRequest instance
   */
  static deserialize(json: string): UpdateMembershipRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateMembershipRequest instance
   */
  static fromObject(obj: any): UpdateMembershipRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateMembershipRequest');
    }


    const instance: UpdateMembershipRequest = {
      id: obj['_id'] as string | undefined,
      householdId: obj['householdId'] as string | undefined,
      userId: obj['userId'] as string | undefined,
      role: obj['role'] as UpdateMembershipRequestRole | undefined,
      joinedAt: obj['joinedAt'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateMembershipRequest instances
   */
  static deserializeArray(json: string): UpdateMembershipRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateMembershipRequest instance to a JSON string
   */
  static serialize(instance: UpdateMembershipRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateMembershipRequest instance to a plain object
   */
  static toObject(instance: UpdateMembershipRequest): any {
    return {
      '_id': instance.id,
      'householdId': instance.householdId,
      'userId': instance.userId,
      'role': instance.role,
      'joinedAt': instance.joinedAt,
    };
  }

  /**
   * Serializes an array of UpdateMembershipRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateMembershipRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
