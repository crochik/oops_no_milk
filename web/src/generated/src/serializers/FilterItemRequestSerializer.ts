// Import model
import { FilterItemRequest } from '../models/FilterItemRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ItemCondition } from '../models/ItemCondition';
import { ItemFields } from '../models/ItemFields';
import { ItemIndexedFields } from '../models/ItemIndexedFields';

// Import dependency serializers (for complex types)
import { ItemConditionSerializer } from './ItemConditionSerializer';
import { ItemFieldsSerializer } from './ItemFieldsSerializer';
import { ItemIndexedFieldsSerializer } from './ItemIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterItemRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterItemRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterItemRequest instance
   */
  static deserialize(json: string): FilterItemRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterItemRequest instance
   */
  static fromObject(obj: any): FilterItemRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterItemRequest');
    }


    const instance: FilterItemRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as ItemIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as ItemFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        ItemConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterItemRequest instances
   */
  static deserializeArray(json: string): FilterItemRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterItemRequest instance to a JSON string
   */
  static serialize(instance: FilterItemRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterItemRequest instance to a plain object
   */
  static toObject(instance: FilterItemRequest): any {
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
        ItemConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterItemRequest instances to a JSON string
   */
  static serializeArray(instances: FilterItemRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
