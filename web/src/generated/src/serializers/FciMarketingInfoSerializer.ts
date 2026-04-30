// Import model
import { FciMarketingInfo } from '../models/FciMarketingInfo';

// Import base class serializer

// Import dependency types (models and enums used in properties)

// Import dependency serializers (for complex types)

// Import derived type serializers (for polymorphic deserialization)

/**
 * Serializer for FciMarketingInfo - handles JSON serialization and deserialization with type validation
 */
export class FciMarketingInfoSerializer {
  /**
   * Deserializes a JSON string into a FciMarketingInfo instance
   */
  static deserialize(json: string): FciMarketingInfo {
    const obj = JSON.parse(json);
    return this.fromObject(obj);
  }

  /**
   * Deserializes a plain object into a FciMarketingInfo instance
   */
  static fromObject(obj: any): FciMarketingInfo {
    if (!obj) {
      throw new Error('Cannot deserialize null or undefined to FciMarketingInfo');
    }


    const instance: FciMarketingInfo = {
    };

    return instance;
  }

  /**
   * Deserializes a JSON string into an array of FciMarketingInfo instances
   */
  static deserializeArray(json: string): FciMarketingInfo[] {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) {
      throw new Error('Expected JSON array');
    }
    return arr.map(obj => this.fromObject(obj));
  }

  /**
   * Serializes a FciMarketingInfo instance to a JSON string
   */
  static serialize(instance: FciMarketingInfo): string {
    return JSON.stringify(this.toObject(instance));
  }

  /**
   * Converts a FciMarketingInfo instance to a plain object
   */
  static toObject(instance: FciMarketingInfo): any {
    return {
    };
  }

  /**
   * Serializes an array of FciMarketingInfo instances to a JSON string
   */
  static serializeArray(instances: FciMarketingInfo[]): string {
    return JSON.stringify(instances.map(inst => this.toObject(inst)));
  }
}
