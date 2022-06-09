const assertString = (value: unknown) => {
  if (typeof value !== 'string') return true;

  const regexPattern = new RegExp(/[<>\/\\]/g);
  return !regexPattern.test(value);
};

export default assertString;
