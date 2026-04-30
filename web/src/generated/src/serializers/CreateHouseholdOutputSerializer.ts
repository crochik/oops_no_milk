// Import model
import { CreateHouseholdOutput } from '../models/CreateHouseholdOutput';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateHouseholdOutput - handles JSON serialization and deserialization with type validation
 */
export class CreateHouseholdOutputSerializer {
  /**
   * Deserializes a JSON string into a CreateHouseholdOutput instance
   */
  static deserialize(json: string): CreateHouseholdOutput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateHouseholdOutput instance
   */
  static fromObject(obj: any): CreateHouseholdOutput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateHouseholdOutput');
    }


    const instance: CreateHouseholdOutput = {
      householdId: obj['householdId'] as string | undefined,
      inviteCode: obj['inviteCode'] as string | undefined,
      membershipId: obj['membershipId'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateHouseholdOutput instances
   */
  static deserializeArray(json: string): CreateHouseholdOutput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateHouseholdOutput instance to a JSON string
   */
  static serialize(instance: CreateHouseholdOutput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateHouseholdOutput instance to a plain object
   */
  static toObject(instance: CreateHouseholdOutput): any {
    return {
      'householdId': instance.householdId,
      'inviteCode': instance.inviteCode,
      'membershipId': instance.membershipId,
    };
  }

  /**
   * Serializes an array of CreateHouseholdOutput instances to a JSON string
   */
  static serializeArray(instances: CreateHouseholdOutput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
