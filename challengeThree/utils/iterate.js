const iterate = (o, k) => {
  const keys = Object.keys(o);

  // TODO: Move to Array.some(), if condition met, early depature, else false and retry
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (key === k) {
      return { found: true, value: o[key] };
    }

    if (typeof o[key] === 'object') {
      const deeperIterationResult = iterate(o[key], k);
      if (deeperIterationResult.found) {
        return deeperIterationResult;
      }
    }
  }

  return { found: false };
};

module.exports = {
  iterateOnError: (o, k) => {
    const result = iterate(o, k);

    if (result.found) {
      return result.value;
    }

    return { message: 'error' };
  },
};
