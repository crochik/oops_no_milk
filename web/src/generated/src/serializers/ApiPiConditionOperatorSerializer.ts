// Import enum
import { ApiPiConditionOperator } from '../models/ApiPiConditionOperator';

/**
 * Serializer for ApiPiConditionOperator enum - handles JSON serialization and deserialization
 */
export class ApiPiConditionOperatorSerializer {
  /**
   * Deserializes a JSON string into a ApiPiConditionOperator enum value
   */
  static deserialize(json: string): ApiPiConditionOperator {
    const value = JSON.parse(json);
    return value as ApiPiConditionOperator;
  }

  /**
   * Converts a plain value to ApiPiConditionOperator enum
   */
  static fromObject(obj: any): ApiPiConditionOperator {
    return obj as ApiPiConditionOperator;
  }

  /**
   * Serializes a ApiPiConditionOperator enum value to a JSON string
   */
  static serialize(instance: ApiPiConditionOperator): string {
    return JSON.stringify(instance);
  }

  /**
   * Converts a ApiPiConditionOperator enum value to a plain value
   */
  static toObject(instance: ApiPiConditionOperator): any {
    return instance;
  }
}
