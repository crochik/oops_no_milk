// Import model
import { FilterReactionRequest } from '../models/FilterReactionRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ReactionCondition } from '../models/ReactionCondition';
import { ReactionFields } from '../models/ReactionFields';
import { ReactionIndexedFields } from '../models/ReactionIndexedFields';

// Import dependency serializers (for complex types)
import { ReactionConditionSerializer } from './ReactionConditionSerializer';
import { ReactionFieldsSerializer } from './ReactionFieldsSerializer';
import { ReactionIndexedFieldsSerializer } from './ReactionIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterReactionRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterReactionRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterReactionRequest instance
   */
  static deserialize(json: string): FilterReactionRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterReactionRequest instance
   */
  static fromObject(obj: any): FilterReactionRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterReactionRequest');
    }


    const instance: FilterReactionRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as ReactionIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as ReactionFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        ReactionConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterReactionRequest instances
   */
  static deserializeArray(json: string): FilterReactionRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterReactionRequest instance to a JSON string
   */
  static serialize(instance: FilterReactionRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterReactionRequest instance to a plain object
   */
  static toObject(instance: FilterReactionRequest): any {
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
        ReactionConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterReactionRequest instances to a JSON string
   */
  static serializeArray(instances: FilterReactionRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
