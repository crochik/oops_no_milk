// Import model
import { Item } from '../models/Item';

// Import base class serializer

// Import dependency types (models and enums used in properties)
import { ItemSection } from '../models/ItemSection';
import { ItemStatus } from '../models/ItemStatus';
import { ItemUrgency } from '../models/ItemUrgency';

// Import dependency serializers (for complex types)
import { ItemSectionSerializer } from './ItemSectionSerializer';
import { ItemStatusSerializer } from './ItemStatusSerializer';
import { ItemUrgencySerializer } from './ItemUrgencySerializer';

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for Item - handles JSON serialization and deserialization with type validation
 */
export class ItemSerializer {
  /**
   * Deserializes a JSON string into a Item instance
   */
  static deserialize(json: string): Item {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a Item instance
   */
  static fromObject(obj: any): Item {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to Item');
    }


    const instance: Item = {
      id: obj['_id'] as string | undefined,
      householdId: obj['householdId'] as string | undefined,
      name: obj['name'] as string | undefined,
      section: obj['section'] as ItemSection | undefined,
      urgency: obj['urgency'] as ItemUrgency | undefined,
      status: obj['status'] as ItemStatus | undefined,
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
   * Deserializes a JSON string into an array of Item instances
   */
  static deserializeArray(json: string): Item[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a Item instance to a JSON string
   */
  static serialize(instance: Item): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a Item instance to a plain object
   */
  static toObject(instance: Item): any {
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
   * Serializes an array of Item instances to a JSON string
   */
  static serializeArray(instances: Item[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
