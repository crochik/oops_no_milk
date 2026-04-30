// Import model
import { FilterOrganizationRequest } from '../models/FilterOrganizationRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { OrganizationCondition } from '../models/OrganizationCondition';
import { OrganizationFields } from '../models/OrganizationFields';
import { OrganizationIndexedFields } from '../models/OrganizationIndexedFields';

// Import dependency serializers (for complex types)
import { OrganizationConditionSerializer } from './OrganizationConditionSerializer';
import { OrganizationFieldsSerializer } from './OrganizationFieldsSerializer';
import { OrganizationIndexedFieldsSerializer } from './OrganizationIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterOrganizationRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterOrganizationRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterOrganizationRequest instance
   */
  static deserialize(json: string): FilterOrganizationRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterOrganizationRequest instance
   */
  static fromObject(obj: any): FilterOrganizationRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterOrganizationRequest');
    }


    const instance: FilterOrganizationRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as OrganizationIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as OrganizationFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        OrganizationConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterOrganizationRequest instances
   */
  static deserializeArray(json: string): FilterOrganizationRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterOrganizationRequest instance to a JSON string
   */
  static serialize(instance: FilterOrganizationRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterOrganizationRequest instance to a plain object
   */
  static toObject(instance: FilterOrganizationRequest): any {
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
        OrganizationConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterOrganizationRequest instances to a JSON string
   */
  static serializeArray(instances: FilterOrganizationRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
