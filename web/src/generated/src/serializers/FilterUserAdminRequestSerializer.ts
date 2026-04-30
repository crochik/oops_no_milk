// Import model
import { FilterUserAdminRequest } from '../models/FilterUserAdminRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { UserAdminCondition } from '../models/UserAdminCondition';
import { UserAdminFields } from '../models/UserAdminFields';
import { UserAdminIndexedFields } from '../models/UserAdminIndexedFields';

// Import dependency serializers (for complex types)
import { UserAdminConditionSerializer } from './UserAdminConditionSerializer';
import { UserAdminFieldsSerializer } from './UserAdminFieldsSerializer';
import { UserAdminIndexedFieldsSerializer } from './UserAdminIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterUserAdminRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterUserAdminRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterUserAdminRequest instance
   */
  static deserialize(json: string): FilterUserAdminRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterUserAdminRequest instance
   */
  static fromObject(obj: any): FilterUserAdminRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterUserAdminRequest');
    }


    const instance: FilterUserAdminRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as UserAdminIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as UserAdminFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        UserAdminConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterUserAdminRequest instances
   */
  static deserializeArray(json: string): FilterUserAdminRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterUserAdminRequest instance to a JSON string
   */
  static serialize(instance: FilterUserAdminRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterUserAdminRequest instance to a plain object
   */
  static toObject(instance: FilterUserAdminRequest): any {
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
        UserAdminConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterUserAdminRequest instances to a JSON string
   */
  static serializeArray(instances: FilterUserAdminRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
