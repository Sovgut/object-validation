import { INITIAL_OPTIONS } from './constants';
import type { Response, Source, ValidationScheme } from './types';
import assertEqual from './utils/assertEqual';
import assertMaxLength from './utils/assertMaxLength';
import assertMinLength from './utils/assertMinLength';
import assertString from './utils/assertString';
import assertType from './utils/assertType';
import assertValue from './utils/assertValue';
import createReason from './utils/createReason';
import onValidate from './utils/onValidate';

const validateObject = (values: Source, scheme: ValidationScheme): Response => {
  if (!scheme) return { success: true };
  if (!values) return { success: false };

  for (const property of scheme) {
    let lengths: { minLength?: number; maxLength?: number } = {
      maxLength: undefined,
      minLength: undefined,
    };

    if (property.extract().type === 'string') {
      lengths = {
        maxLength: Number.MAX_SAFE_INTEGER,
        minLength: Number.MIN_SAFE_INTEGER,
      };
    }

    const {
      name,
      type,
      optional,
      minLength,
      maxLength,
      compareWith,
      onValidate: callback,
    } = { ...INITIAL_OPTIONS, ...lengths, ...property.extract() };

    if (optional && !assertValue(values[name])) {
      continue;
    }

    if (!assertValue(values[name])) {
      return {
        success: false,
        reason: createReason(name, 'undefined-or-empty-value'),
      };
    }

    if (!assertType(values[name], type)) {
      return {
        success: false,
        reason: createReason(name, 'invalid-type'),
      };
    }

    if (!assertString(values[name])) {
      return {
        success: false,
        reason: createReason(name, 'invalid-string'),
      };
    }

    if (minLength && !assertMinLength(values[name], minLength)) {
      return {
        success: false,
        reason: createReason(name, 'out-of-range'),
      };
    }

    if (maxLength && !assertMaxLength(values[name], maxLength)) {
      return {
        success: false,
        reason: createReason(name, 'out-of-range'),
      };
    }

    if (compareWith && !assertEqual(values, name, compareWith)) {
      return {
        success: false,
        reason: createReason(name, 'is-not-comparable'),
      };
    }

    const onValidateState = onValidate(values[name], callback);
    if (onValidateState) {
      return {
        success: false,
        reason: createReason(name, onValidateState),
      };
    }
  }

  return { success: true };
};

export default validateObject;
export type {
  Extended,
  Primitive,
  Property,
  Response,
  Scheme,
  Source,
} from './types';
export { default as property } from './utils/property';
