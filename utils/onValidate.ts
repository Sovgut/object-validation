const onValidate = (
  value: any,
  callback?: (value: any) => string | void,
): string | void => {
  if (!callback) return;

  return callback(value);
};

export default onValidate;
