// Import model
import { EntityCondition } from '../models/EntityCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { EntityIndexedFields } from '../models/EntityIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { EntityIndexedFieldsSerializer } from './EntityIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for EntityCondition - handles JSON serialization and deserialization with type validation
 */
export class EntityConditionSerializer {
  /**
   * Deserializes a JSON string into a EntityCondition instance
   */
  static deserialize(json: string): EntityCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a EntityCondition instance
   */
  static fromObject(obj: any): EntityCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to EntityCondition');
    }


    const instance: EntityCondition = {
      fieldName: obj['fieldName'] as EntityIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of EntityCondition instances
   */
  static deserializeArray(json: string): EntityCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a EntityCondition instance to a JSON string
   */
  static serialize(instance: EntityCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a EntityCondition instance to a plain object
   */
  static toObject(instance: EntityCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of EntityCondition instances to a JSON string
   */
  static serializeArray(instances: EntityCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
