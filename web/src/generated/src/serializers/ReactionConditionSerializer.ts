// Import model
import { ReactionCondition } from '../models/ReactionCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { ReactionIndexedFields } from '../models/ReactionIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { ReactionIndexedFieldsSerializer } from './ReactionIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for ReactionCondition - handles JSON serialization and deserialization with type validation
 */
export class ReactionConditionSerializer {
  /**
   * Deserializes a JSON string into a ReactionCondition instance
   */
  static deserialize(json: string): ReactionCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a ReactionCondition instance
   */
  static fromObject(obj: any): ReactionCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to ReactionCondition');
    }


    const instance: ReactionCondition = {
      fieldName: obj['fieldName'] as ReactionIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of ReactionCondition instances
   */
  static deserializeArray(json: string): ReactionCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a ReactionCondition instance to a JSON string
   */
  static serialize(instance: ReactionCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a ReactionCondition instance to a plain object
   */
  static toObject(instance: ReactionCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of ReactionCondition instances to a JSON string
   */
  static serializeArray(instances: ReactionCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
