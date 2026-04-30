// Import model
import { UpdateItemRequest } from '../models/UpdateItemRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { UpdateItemRequestSection } from '../models/UpdateItemRequestSection';
import { UpdateItemRequestStatus } from '../models/UpdateItemRequestStatus';
import { UpdateItemRequestUrgency } from '../models/UpdateItemRequestUrgency';

// Import dependency serializers (for complex types)
import { UpdateItemRequestSectionSerializer } from './UpdateItemRequestSectionSerializer';
import { UpdateItemRequestStatusSerializer } from './UpdateItemRequestStatusSerializer';
import { UpdateItemRequestUrgencySerializer } from './UpdateItemRequestUrgencySerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for UpdateItemRequest - handles JSON serialization and deserialization with type validation
 */
export class UpdateItemRequestSerializer {
  /**
   * Deserializes a JSON string into a UpdateItemRequest instance
   */
  static deserialize(json: string): UpdateItemRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a UpdateItemRequest instance
   */
  static fromObject(obj: any): UpdateItemRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to UpdateItemRequest');
    }


    const instance: UpdateItemRequest = {
      id: obj['_id'] as string | undefined,
      householdId: obj['householdId'] as string | undefined,
      name: obj['name'] as string | undefined,
      section: obj['section'] as UpdateItemRequestSection | undefined,
      urgency: obj['urgency'] as UpdateItemRequestUrgency | undefined,
      status: obj['status'] as UpdateItemRequestStatus | undefined,
      notes: obj['notes'] as string | undefined,
      addedById: obj['addedById'] as string | undefined,
      addedAt: obj['addedAt'] as string | undefined,
      purchasedById: obj['purchasedById'] as string | undefined,
      purchasedAt: obj['purchasedAt'] as string | undefined,
      purchasePriceCents: obj['purchasePriceCents'] as number | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of UpdateItemRequest instances
   */
  static deserializeArray(json: string): UpdateItemRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a UpdateItemRequest instance to a JSON string
   */
  static serialize(instance: UpdateItemRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a UpdateItemRequest instance to a plain object
   */
  static toObject(instance: UpdateItemRequest): any {
    return {
      '_id': instance.id,
      'householdId': instance.householdId,
      'name': instance.name,
      'section': instance.section,
      'urgency': instance.urgency,
      'status': instance.status,
      'notes': instance.notes,
      'addedById': instance.addedById,
      'addedAt': instance.addedAt,
      'purchasedById': instance.purchasedById,
      'purchasedAt': instance.purchasedAt,
      'purchasePriceCents': instance.purchasePriceCents,
    };
  }

  /**
   * Serializes an array of UpdateItemRequest instances to a JSON string
   */
  static serializeArray(instances: UpdateItemRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
