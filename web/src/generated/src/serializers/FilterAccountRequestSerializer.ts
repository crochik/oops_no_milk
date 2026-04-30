// Import model
import { FilterAccountRequest } from '../models/FilterAccountRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { AccountCondition } from '../models/AccountCondition';
import { AccountFields } from '../models/AccountFields';
import { AccountIndexedFields } from '../models/AccountIndexedFields';

// Import dependency serializers (for complex types)
import { AccountConditionSerializer } from './AccountConditionSerializer';
import { AccountFieldsSerializer } from './AccountFieldsSerializer';
import { AccountIndexedFieldsSerializer } from './AccountIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterAccountRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterAccountRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterAccountRequest instance
   */
  static deserialize(json: string): FilterAccountRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterAccountRequest instance
   */
  static fromObject(obj: any): FilterAccountRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterAccountRequest');
    }


    const instance: FilterAccountRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as AccountIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as AccountFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        AccountConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterAccountRequest instances
   */
  static deserializeArray(json: string): FilterAccountRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterAccountRequest instance to a JSON string
   */
  static serialize(instance: FilterAccountRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterAccountRequest instance to a plain object
   */
  static toObject(instance: FilterAccountRequest): any {
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
        AccountConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterAccountRequest instances to a JSON string
   */
  static serializeArray(instances: FilterAccountRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
