// Import model
import { FilterUserDesignAssociateRequest } from '../models/FilterUserDesignAssociateRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { UserDesignAssociateCondition } from '../models/UserDesignAssociateCondition';
import { UserDesignAssociateFields } from '../models/UserDesignAssociateFields';
import { UserDesignAssociateIndexedFields } from '../models/UserDesignAssociateIndexedFields';

// Import dependency serializers (for complex types)
import { UserDesignAssociateConditionSerializer } from './UserDesignAssociateConditionSerializer';
import { UserDesignAssociateFieldsSerializer } from './UserDesignAssociateFieldsSerializer';
import { UserDesignAssociateIndexedFieldsSerializer } from './UserDesignAssociateIndexedFieldsSerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FilterUserDesignAssociateRequest - handles JSON serialization and deserialization with type validation
 */
export class FilterUserDesignAssociateRequestSerializer {
  /**
   * Deserializes a JSON string into a FilterUserDesignAssociateRequest instance
   */
  static deserialize(json: string): FilterUserDesignAssociateRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FilterUserDesignAssociateRequest instance
   */
  static fromObject(obj: any): FilterUserDesignAssociateRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FilterUserDesignAssociateRequest');
    }


    const instance: FilterUserDesignAssociateRequest = {
      top: obj['top'] as number | undefined,
      skip: obj['skip'] as number | undefined,
      orderBy: obj['orderBy'] as UserDesignAssociateIndexedFields | undefined,
      reverseOrder: obj['reverseOrder'] as boolean | undefined,
      view: obj['view'] as string | undefined,
      fields: obj['fields'] ? (obj['fields'] as any[]).map((item: any) =>
        item as UserDesignAssociateFields
      ) : [] as any,
      criteria: obj['criteria'] ? (obj['criteria'] as any[]).map((item: any) =>
        UserDesignAssociateConditionSerializer.fromObject(item)
      ) : [] as any,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FilterUserDesignAssociateRequest instances
   */
  static deserializeArray(json: string): FilterUserDesignAssociateRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FilterUserDesignAssociateRequest instance to a JSON string
   */
  static serialize(instance: FilterUserDesignAssociateRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FilterUserDesignAssociateRequest instance to a plain object
   */
  static toObject(instance: FilterUserDesignAssociateRequest): any {
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
        UserDesignAssociateConditionSerializer.toObject(item)
      ),
    };
  }

  /**
   * Serializes an array of FilterUserDesignAssociateRequest instances to a JSON string
   */
  static serializeArray(instances: FilterUserDesignAssociateRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
