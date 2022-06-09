import type { Extended } from './types';

export const INITIAL_OPTIONS: Omit<Omit<Extended, 'name'>, 'type'> = {
  maxLength: Number.MAX_SAFE_INTEGER,
  minLength: Number.MIN_SAFE_INTEGER,
  compareWith: undefined,
  onValidate: undefined,
  optional: false,
};
