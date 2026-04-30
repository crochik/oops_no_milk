// Import model
import { JoinHouseholdInput } from '../models/JoinHouseholdInput';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for JoinHouseholdInput - handles JSON serialization and deserialization with type validation
 */
export class JoinHouseholdInputSerializer {
  /**
   * Deserializes a JSON string into a JoinHouseholdInput instance
   */
  static deserialize(json: string): JoinHouseholdInput {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a JoinHouseholdInput instance
   */
  static fromObject(obj: any): JoinHouseholdInput {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to JoinHouseholdInput');
    }


    const instance: JoinHouseholdInput = {
      inviteCode: obj['inviteCode'] as string | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of JoinHouseholdInput instances
   */
  static deserializeArray(json: string): JoinHouseholdInput[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a JoinHouseholdInput instance to a JSON string
   */
  static serialize(instance: JoinHouseholdInput): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a JoinHouseholdInput instance to a plain object
   */
  static toObject(instance: JoinHouseholdInput): any {
    return {
      'inviteCode': instance.inviteCode,
    };
  }

  /**
   * Serializes an array of JoinHouseholdInput instances to a JSON string
   */
  static serializeArray(instances: JoinHouseholdInput[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
