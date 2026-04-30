// Import model
import { FilterMembershipRequest } from '../models/FilterMembershipRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { MembershipCondition } from '../models/MembershipCondition';
import { MembershipFields } from '../models/MembershipFields';
import { MembershipIndexedFields } from '../models/MembershipIndexedFields';

// Import dependency serializers (for complex types)
import { MembershipConditionSerializer } from './MembershipConditionSerializer';
import { MembershipFieldsSerializer } from './MembershipFieldsSerializer';
import { MembershipIndexedFieldsSerializer } from './MembershipIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterMembershipRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterMembershipRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterMembershipRequest instance
   */
  static deserialize(json: string): FilterMembershipRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterMembershipRequest instance
   */
  static fromObject(obj: any): FilterMembershipRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterMembershipRequest');
    }


    const instance: FilterMembershipRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as MembershipIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as MembershipFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        MembershipConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterMembershipRequest instances
   */
  static deserializeArray(json: string): FilterMembershipRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterMembershipRequest instance to a JSON string
   */
  static serialize(instance: FilterMembershipRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterMembershipRequest instance to a plain object
   */
  static toObject(instance: FilterMembershipRequest): any {
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
        MembershipConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterMembershipRequest instances to a JSON string
   */
  static serializeArray(instances: FilterMembershipRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
