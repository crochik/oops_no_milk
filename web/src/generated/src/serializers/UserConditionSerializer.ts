// Import model
import { UserCondition } from '../models/UserCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { UserIndexedFields } from '../models/UserIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { UserIndexedFieldsSerializer } from './UserIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UserCondition - handles JSON serialization and deserialization with type validation
 */
export class UserConditionSerializer {
  /**
   * Deserializes a JSON string into a UserCondition instance
   */
  static deserialize(json: string): UserCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UserCondition instance
   */
  static fromObject(obj: any): UserCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UserCondition');
    }


    const instance: UserCondition = {
      fieldName: obj['fieldName'] as UserIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UserCondition instances
   */
  static deserializeArray(json: string): UserCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UserCondition instance to a JSON string
   */
  static serialize(instance: UserCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UserCondition instance to a plain object
   */
  static toObject(instance: UserCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of UserCondition instances to a JSON string
   */
  static serializeArray(instances: UserCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
