// Import model
import { FilterHouseholdRequest } from '../models/FilterHouseholdRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { HouseholdCondition } from '../models/HouseholdCondition';
import { HouseholdFields } from '../models/HouseholdFields';
import { HouseholdIndexedFields } from '../models/HouseholdIndexedFields';

// Import dependency serializers (for complex types)
import { HouseholdConditionSerializer } from './HouseholdConditionSerializer';
import { HouseholdFieldsSerializer } from './HouseholdFieldsSerializer';
import { HouseholdIndexedFieldsSerializer } from './HouseholdIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterHouseholdRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterHouseholdRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterHouseholdRequest instance
   */
  static deserialize(json: string): FilterHouseholdRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterHouseholdRequest instance
   */
  static fromObject(obj: any): FilterHouseholdRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterHouseholdRequest');
    }


    const instance: FilterHouseholdRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as HouseholdIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as HouseholdFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        HouseholdConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterHouseholdRequest instances
   */
  static deserializeArray(json: string): FilterHouseholdRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterHouseholdRequest instance to a JSON string
   */
  static serialize(instance: FilterHouseholdRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterHouseholdRequest instance to a plain object
   */
  static toObject(instance: FilterHouseholdRequest): any {
    return {
      'top': instance.top,
      'skip': instance.skip,
      'orderBy': instance.orderBy,
      'reverseOrder': instance.reverseOrder,
      'view': instance.view,
      'fields': instance.fields?.map((item: any) =>
        item
      ),
      'criteria': instance.criteria?.map((item: any) =>
        HouseholdConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterHouseholdRequest instances to a JSON string
   */
  static serializeArray(instances: FilterHouseholdRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
