export type Primitive = 'string' | 'number' | 'boolean';
export type Extended = {
  /**
   * @description The property name from the source object
   */
  name: string;

  /**
   * @description Type of the property from the source object
   */
  type: Primitive;

  /**
   * @description Select target for strict comparison `(value === value)`
   */
  compareWith?: string;

  /**
   * @description If enabled `assertValue` skipped when validating
   */
  optional?: boolean;

  /**
   * @description for string type only
   * @default Number.MIN_SAFE_INTEGER
   */
  minLength?: number;

  /**
   * @description for string type only
   * @default Number.MAX_SAFE_INTEGER
   */
  maxLength?: number;

  /**
   * @description Custom hook for additional validation
   * @description Must return `void` or `string` in format `something-wrong-happened`
   */
  onValidate?: (value: any) => string | void;
};

export type Scheme = Extended[];

export interface Source {
  [key: string]: unknown;
}

export interface Response {
  success: boolean;
  reason?: string;
}

export type Property = `${string}:${'string' | 'number' | 'boolean'}`;
