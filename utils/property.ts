import type { Extended, Primitive, Property, Scheme } from '../types';

const property = (key: Property): Scheme => {
  const [name, type] = key.split(':');
  const closure: Extended = { name, type: type as Primitive };

  return {
    onValidate(callback: (value: string) => string | void) {
      closure.onValidate = callback;

      return this;
    },
    min(length: number) {
      closure.minLength = length;

      return this;
    },
    max(length: number) {
      closure.maxLength = length;

      return this;
    },
    compareWith(key: string) {
      closure.compareWith = key;

      return this;
    },
    optional() {
      closure.optional = true;

      return this;
    },

    extract: (): Extended => closure,
  };
};

export default property;
