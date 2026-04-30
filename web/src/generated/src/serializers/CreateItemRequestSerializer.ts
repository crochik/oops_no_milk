// Import model
import { CreateItemRequest } from '../models/CreateItemRequest';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { CreateItemRequestSection } from '../models/CreateItemRequestSection';
import { CreateItemRequestStatus } from '../models/CreateItemRequestStatus';
import { CreateItemRequestUrgency } from '../models/CreateItemRequestUrgency';

// Import dependency serializers (for complex types)
import { CreateItemRequestSectionSerializer } from './CreateItemRequestSectionSerializer';
import { CreateItemRequestStatusSerializer } from './CreateItemRequestStatusSerializer';
import { CreateItemRequestUrgencySerializer } from './CreateItemRequestUrgencySerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for CreateItemRequest - handles JSON serialization and deserialization with type validation
 */
export class CreateItemRequestSerializer {
  /**
   * Deserializes a JSON string into a CreateItemRequest instance
   */
  static deserialize(json: string): CreateItemRequest {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a CreateItemRequest instance
   */
  static fromObject(obj: any): CreateItemRequest {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to CreateItemRequest');
    }


    const instance: CreateItemRequest = {
      id: obj['_id'] as string | undefined,
      householdId: obj['householdId'] as string,
      name: obj['name'] as string,
      section: obj['section'] as CreateItemRequestSection,
      urgency: obj['urgency'] as CreateItemRequestUrgency,
      status: obj['status'] as CreateItemRequestStatus,
      notes: obj['notes'] as string | undefined,
      addedById: obj['addedById'] as string,
      addedAt: obj['addedAt'] as string,
      purchasedById: obj['purchasedById'] as string | undefined,
      purchasedAt: obj['purchasedAt'] as string | undefined,
      purchasePriceCents: obj['purchasePriceCents'] as number | undefined,
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of CreateItemRequest instances
   */
  static deserializeArray(json: string): CreateItemRequest[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a CreateItemRequest instance to a JSON string
   */
  static serialize(instance: CreateItemRequest): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a CreateItemRequest instance to a plain object
   */
  static toObject(instance: CreateItemRequest): any {
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
   * Serializes an array of CreateItemRequest instances to a JSON string
   */
  static serializeArray(instances: CreateItemRequest[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
