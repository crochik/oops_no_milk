// Import model
import { UserManagerCondition } from '../models/UserManagerCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { UserManagerIndexedFields } from '../models/UserManagerIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { UserManagerIndexedFieldsSerializer } from './UserManagerIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UserManagerCondition - handles JSON serialization and deserialization with type validation
 */
export class UserManagerConditionSerializer {
  /**
   * Deserializes a JSON string into a UserManagerCondition instance
   */
  static deserialize(json: string): UserManagerCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UserManagerCondition instance
   */
  static fromObject(obj: any): UserManagerCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UserManagerCondition');
    }


    const instance: UserManagerCondition = {
      fieldName: obj['fieldName'] as UserManagerIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UserManagerCondition instances
   */
  static deserializeArray(json: string): UserManagerCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UserManagerCondition instance to a JSON string
   */
  static serialize(instance: UserManagerCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UserManagerCondition instance to a plain object
   */
  static toObject(instance: UserManagerCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of UserManagerCondition instances to a JSON string
   */
  static serializeArray(instances: UserManagerCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
