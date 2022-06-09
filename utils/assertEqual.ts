const assertEqual = (values: any, current: string, target?: string) => {
  if (!target) return true;

  return values[current] === values[target];
};

export default assertEqual;
