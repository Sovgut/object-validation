const assertMinLength = (value: unknown, minLength?: number) => {
  if (typeof value !== 'string') return true;
  if (!minLength) return true;

  return value.length >= minLength;
};

export default assertMinLength;
