// Import enum
import { EntityT } from '../models/EntityT';

/**
 * Serializer for EntityT enum - handles JSON serialization and deserialization
 */
export class EntityTSerializer {
  /**
   * Deserializes a JSON string into a EntityT enum value
   */
  static deserialize(json: string): EntityT {
    const value = JSON.parse(json);
    return value as EntityT;
  }

  /**
   * Converts a plain value to EntityT enum
   */
  static fromObject(obj: any): EntityT {
    return obj as EntityT;
  }

  /**
   * Serializes a EntityT enum value to a JSON string
   */
  static serialize(instance: EntityT): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a EntityT enum value to a plain value
   */
  static toObject(instance: EntityT): any {
    return instance;
  }
}
