const assertMaxLength = (value: unknown, maxLength?: number) => {
  if (typeof value !== 'string') return true;
  if (!maxLength) return true;

  return value.length <= maxLength;
};

export default assertMaxLength;
