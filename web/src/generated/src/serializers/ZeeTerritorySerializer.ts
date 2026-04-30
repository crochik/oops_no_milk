// Import model
import { ZeeTerritory } from '../models/ZeeTerritory';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for ZeeTerritory - handles JSON serialization and deserialization with type validation
 */
export class ZeeTerritorySerializer {
  /**
   * Deserializes a JSON string into a ZeeTerritory instance
   */
  static deserialize(json: string): ZeeTerritory {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a ZeeTerritory instance
   */
  static fromObject(obj: any): ZeeTerritory {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to ZeeTerritory');
    }


    const instance: ZeeTerritory = {
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of ZeeTerritory instances
   */
  static deserializeArray(json: string): ZeeTerritory[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a ZeeTerritory instance to a JSON string
   */
  static serialize(instance: ZeeTerritory): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a ZeeTerritory instance to a plain object
   */
  static toObject(instance: ZeeTerritory): any {
    return {
    };
  }

  /**
   * Serializes an array of ZeeTerritory instances to a JSON string
   */
  static serializeArray(instances: ZeeTerritory[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
