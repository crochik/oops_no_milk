// Import model
import { UserDesignAssociateCondition } from '../models/UserDesignAssociateCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { UserDesignAssociateIndexedFields } from '../models/UserDesignAssociateIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { UserDesignAssociateIndexedFieldsSerializer } from './UserDesignAssociateIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UserDesignAssociateCondition - handles JSON serialization and deserialization with type validation
 */
export class UserDesignAssociateConditionSerializer {
  /**
   * Deserializes a JSON string into a UserDesignAssociateCondition instance
   */
  static deserialize(json: string): UserDesignAssociateCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UserDesignAssociateCondition instance
   */
  static fromObject(obj: any): UserDesignAssociateCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UserDesignAssociateCondition');
    }


    const instance: UserDesignAssociateCondition = {
      fieldName: obj['fieldName'] as UserDesignAssociateIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UserDesignAssociateCondition instances
   */
  static deserializeArray(json: string): UserDesignAssociateCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UserDesignAssociateCondition instance to a JSON string
   */
  static serialize(instance: UserDesignAssociateCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UserDesignAssociateCondition instance to a plain object
   */
  static toObject(instance: UserDesignAssociateCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of UserDesignAssociateCondition instances to a JSON string
   */
  static serializeArray(instances: UserDesignAssociateCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
