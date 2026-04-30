// Import model
import { FilterEntityRequest } from '../models/FilterEntityRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { EntityCondition } from '../models/EntityCondition';
import { EntityFields } from '../models/EntityFields';
import { EntityIndexedFields } from '../models/EntityIndexedFields';

// Import dependency serializers (for complex types)
import { EntityConditionSerializer } from './EntityConditionSerializer';
import { EntityFieldsSerializer } from './EntityFieldsSerializer';
import { EntityIndexedFieldsSerializer } from './EntityIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterEntityRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterEntityRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterEntityRequest instance
   */
  static deserialize(json: string): FilterEntityRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterEntityRequest instance
   */
  static fromObject(obj: any): FilterEntityRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterEntityRequest');
    }


    const instance: FilterEntityRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as EntityIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as EntityFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        EntityConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterEntityRequest instances
   */
  static deserializeArray(json: string): FilterEntityRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterEntityRequest instance to a JSON string
   */
  static serialize(instance: FilterEntityRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterEntityRequest instance to a plain object
   */
  static toObject(instance: FilterEntityRequest): any {
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
        EntityConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterEntityRequest instances to a JSON string
   */
  static serializeArray(instances: FilterEntityRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
