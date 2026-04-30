// Import model
import { AccountCondition } from '../models/AccountCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { AccountIndexedFields } from '../models/AccountIndexedFields';
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';

// Import dependency serializers (for complex types)
import { AccountIndexedFieldsSerializer } from './AccountIndexedFieldsSerializer';
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for AccountCondition - handles JSON serialization and deserialization with type validation
 */
export class AccountConditionSerializer {
  /**
   * Deserializes a JSON string into a AccountCondition instance
   */
  static deserialize(json: string): AccountCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a AccountCondition instance
   */
  static fromObject(obj: any): AccountCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to AccountCondition');
    }


    const instance: AccountCondition = {
      fieldName: obj['fieldName'] as AccountIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of AccountCondition instances
   */
  static deserializeArray(json: string): AccountCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a AccountCondition instance to a JSON string
   */
  static serialize(instance: AccountCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a AccountCondition instance to a plain object
   */
  static toObject(instance: AccountCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of AccountCondition instances to a JSON string
   */
  static serializeArray(instances: AccountCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
