// Import model
import { FilterUserRequest } from '../models/FilterUserRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { UserCondition } from '../models/UserCondition';
import { UserFields } from '../models/UserFields';
import { UserIndexedFields } from '../models/UserIndexedFields';

// Import dependency serializers (for complex types)
import { UserConditionSerializer } from './UserConditionSerializer';
import { UserFieldsSerializer } from './UserFieldsSerializer';
import { UserIndexedFieldsSerializer } from './UserIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterUserRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterUserRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterUserRequest instance
   */
  static deserialize(json: string): FilterUserRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterUserRequest instance
   */
  static fromObject(obj: any): FilterUserRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterUserRequest');
    }


    const instance: FilterUserRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as UserIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as UserFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        UserConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterUserRequest instances
   */
  static deserializeArray(json: string): FilterUserRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterUserRequest instance to a JSON string
   */
  static serialize(instance: FilterUserRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterUserRequest instance to a plain object
   */
  static toObject(instance: FilterUserRequest): any {
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
        UserConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterUserRequest instances to a JSON string
   */
  static serializeArray(instances: FilterUserRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
