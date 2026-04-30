// Import model
import { OrganizationCondition } from '../models/OrganizationCondition';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';
import { OrganizationIndexedFields } from '../models/OrganizationIndexedFields';

// Import dependency serializers (for complex types)
import { ApiPiConditionOperatorSerializer } from './ApiPiConditionOperatorSerializer';
import { OrganizationIndexedFieldsSerializer } from './OrganizationIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for OrganizationCondition - handles JSON serialization and deserialization with type validation
 */
export class OrganizationConditionSerializer {
  /**
   * Deserializes a JSON string into a OrganizationCondition instance
   */
  static deserialize(json: string): OrganizationCondition {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a OrganizationCondition instance
   */
  static fromObject(obj: any): OrganizationCondition {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to OrganizationCondition');
    }


    const instance: OrganizationCondition = {
      fieldName: obj['fieldName'] as OrganizationIndexedFields | undefined,
      operator: obj['operator'] as ApiPiConditionOperator | undefined,
      value: obj['value'] as any | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of OrganizationCondition instances
   */
  static deserializeArray(json: string): OrganizationCondition[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a OrganizationCondition instance to a JSON string
   */
  static serialize(instance: OrganizationCondition): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a OrganizationCondition instance to a plain object
   */
  static toObject(instance: OrganizationCondition): any {
    return {
      'fieldName': instance.fieldName,
      'operator': instance.operator,
      'value': instance.value,
    };
  }

  /**
   * Serializes an array of OrganizationCondition instances to a JSON string
   */
  static serializeArray(instances: OrganizationCondition[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
