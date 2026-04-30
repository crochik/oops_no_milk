// Import model
import { MembershipCondition } from '../models/MembershipCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { MembershipIndexedFields } from '../models/MembershipIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { MembershipIndexedFieldsSerializer } from './MembershipIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for MembershipCondition - handles JSON serialization and deserialization with type validation
 */
export class MembershipConditionSerializer {
  /**
   * Deserializes a JSON string into a MembershipCondition instance
   */
  static deserialize(json: string): MembershipCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a MembershipCondition instance
   */
  static fromObject(obj: any): MembershipCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to MembershipCondition');
    }


    const instance: MembershipCondition = {
      fieldName: obj['fieldName'] as MembershipIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of MembershipCondition instances
   */
  static deserializeArray(json: string): MembershipCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a MembershipCondition instance to a JSON string
   */
  static serialize(instance: MembershipCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a MembershipCondition instance to a plain object
   */
  static toObject(instance: MembershipCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of MembershipCondition instances to a JSON string
   */
  static serializeArray(instances: MembershipCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
