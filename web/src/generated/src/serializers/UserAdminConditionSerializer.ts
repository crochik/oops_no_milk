// Import model
import { UserAdminCondition } from '../models/UserAdminCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { UserAdminIndexedFields } from '../models/UserAdminIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { UserAdminIndexedFieldsSerializer } from './UserAdminIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UserAdminCondition - handles JSON serialization and deserialization with type validation
 */
export class UserAdminConditionSerializer {
  /**
   * Deserializes a JSON string into a UserAdminCondition instance
   */
  static deserialize(json: string): UserAdminCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UserAdminCondition instance
   */
  static fromObject(obj: any): UserAdminCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UserAdminCondition');
    }


    const instance: UserAdminCondition = {
      fieldName: obj['fieldName'] as UserAdminIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UserAdminCondition instances
   */
  static deserializeArray(json: string): UserAdminCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UserAdminCondition instance to a JSON string
   */
  static serialize(instance: UserAdminCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UserAdminCondition instance to a plain object
   */
  static toObject(instance: UserAdminCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of UserAdminCondition instances to a JSON string
   */
  static serializeArray(instances: UserAdminCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
