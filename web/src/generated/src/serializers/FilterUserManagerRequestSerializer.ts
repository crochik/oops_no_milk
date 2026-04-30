// Import model
import { FilterUserManagerRequest } from '../models/FilterUserManagerRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { UserManagerCondition } from '../models/UserManagerCondition';
import { UserManagerFields } from '../models/UserManagerFields';
import { UserManagerIndexedFields } from '../models/UserManagerIndexedFields';

// Import dependency serializers (for complex types)
import { UserManagerConditionSerializer } from './UserManagerConditionSerializer';
import { UserManagerFieldsSerializer } from './UserManagerFieldsSerializer';
import { UserManagerIndexedFieldsSerializer } from './UserManagerIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterUserManagerRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterUserManagerRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterUserManagerRequest instance
   */
  static deserialize(json: string): FilterUserManagerRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterUserManagerRequest instance
   */
  static fromObject(obj: any): FilterUserManagerRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterUserManagerRequest');
    }


    const instance: FilterUserManagerRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as UserManagerIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as UserManagerFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        UserManagerConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterUserManagerRequest instances
   */
  static deserializeArray(json: string): FilterUserManagerRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterUserManagerRequest instance to a JSON string
   */
  static serialize(instance: FilterUserManagerRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterUserManagerRequest instance to a plain object
   */
  static toObject(instance: FilterUserManagerRequest): any {
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
        UserManagerConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterUserManagerRequest instances to a JSON string
   */
  static serializeArray(instances: FilterUserManagerRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
