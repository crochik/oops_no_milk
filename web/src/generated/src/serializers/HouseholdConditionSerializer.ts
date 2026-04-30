// Import model
import { HouseholdCondition } from '../models/HouseholdCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { HouseholdIndexedFields } from '../models/HouseholdIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { HouseholdIndexedFieldsSerializer } from './HouseholdIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for HouseholdCondition - handles JSON serialization and deserialization with type validation
 */
export class HouseholdConditionSerializer {
  /**
   * Deserializes a JSON string into a HouseholdCondition instance
   */
  static deserialize(json: string): HouseholdCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a HouseholdCondition instance
   */
  static fromObject(obj: any): HouseholdCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to HouseholdCondition');
    }


    const instance: HouseholdCondition = {
      fieldName: obj['fieldName'] as HouseholdIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of HouseholdCondition instances
   */
  static deserializeArray(json: string): HouseholdCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a HouseholdCondition instance to a JSON string
   */
  static serialize(instance: HouseholdCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a HouseholdCondition instance to a plain object
   */
  static toObject(instance: HouseholdCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of HouseholdCondition instances to a JSON string
   */
  static serializeArray(instances: HouseholdCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
