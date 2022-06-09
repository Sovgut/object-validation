const assertValue = (value: unknown): boolean => {
  return (value && typeof value !== 'undefined') as boolean;
};

export default assertValue;
