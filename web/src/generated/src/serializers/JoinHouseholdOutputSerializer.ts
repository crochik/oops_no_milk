// Import model
import { JoinHouseholdOutput } from '../models/JoinHouseholdOutput';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for JoinHouseholdOutput - handles JSON serialization and deserialization with type validation
 */
export class JoinHouseholdOutputSerializer {
  /**
   * Deserializes a JSON string into a JoinHouseholdOutput instance
   */
  static deserialize(json: string): JoinHouseholdOutput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a JoinHouseholdOutput instance
   */
  static fromObject(obj: any): JoinHouseholdOutput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to JoinHouseholdOutput');
    }


    const instance: JoinHouseholdOutput = {
      householdId: obj['householdId'] as string | undefined,
      membershipId: obj['membershipId'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of JoinHouseholdOutput instances
   */
  static deserializeArray(json: string): JoinHouseholdOutput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a JoinHouseholdOutput instance to a JSON string
   */
  static serialize(instance: JoinHouseholdOutput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a JoinHouseholdOutput instance to a plain object
   */
  static toObject(instance: JoinHouseholdOutput): any {
    return {
      'householdId': instance.householdId,
      'membershipId': instance.membershipId,
    };
  }

  /**
   * Serializes an array of JoinHouseholdOutput instances to a JSON string
   */
  static serializeArray(instances: JoinHouseholdOutput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
