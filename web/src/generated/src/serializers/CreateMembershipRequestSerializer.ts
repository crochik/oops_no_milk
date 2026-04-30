// Import model
import { CreateMembershipRequest } from '../models/CreateMembershipRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { CreateMembershipRequestRole } from '../models/CreateMembershipRequestRole';

// Import dependency serializers (for complex types)
import { CreateMembershipRequestRoleSerializer } from './CreateMembershipRequestRoleSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateMembershipRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateMembershipRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateMembershipRequest instance
   */
  static deserialize(json: string): CreateMembershipRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateMembershipRequest instance
   */
  static fromObject(obj: any): CreateMembershipRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateMembershipRequest');
    }


    const instance: CreateMembershipRequest = {
      id: obj['_id'] as string | undefined,
      householdId: obj['householdId'] as string,
      userId: obj['userId'] as string,
      role: obj['role'] as CreateMembershipRequestRole,
      joinedAt: obj['joinedAt'] as string,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateMembershipRequest instances
   */
  static deserializeArray(json: string): CreateMembershipRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateMembershipRequest instance to a JSON string
   */
  static serialize(instance: CreateMembershipRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateMembershipRequest instance to a plain object
   */
  static toObject(instance: CreateMembershipRequest): any {
    return {
      '_id': instance.id,
      'householdId': instance.householdId,
      'userId': instance.userId,
      'role': instance.role,
      'joinedAt': instance.joinedAt,
    };
  }

  /**
   * Serializes an array of CreateMembershipRequest instances to a JSON string
   */
  static serializeArray(instances: CreateMembershipRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
