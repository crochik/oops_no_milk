// Import model
import { ItemCondition } from '../models/ItemCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { ItemIndexedFields } from '../models/ItemIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { ItemIndexedFieldsSerializer } from './ItemIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for ItemCondition - handles JSON serialization and deserialization with type validation
 */
export class ItemConditionSerializer {
  /**
   * Deserializes a JSON string into a ItemCondition instance
   */
  static deserialize(json: string): ItemCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a ItemCondition instance
   */
  static fromObject(obj: any): ItemCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to ItemCondition');
    }


    const instance: ItemCondition = {
      fieldName: obj['fieldName'] as ItemIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of ItemCondition instances
   */
  static deserializeArray(json: string): ItemCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a ItemCondition instance to a JSON string
   */
  static serialize(instance: ItemCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a ItemCondition instance to a plain object
   */
  static toObject(instance: ItemCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of ItemCondition instances to a JSON string
   */
  static serializeArray(instances: ItemCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
