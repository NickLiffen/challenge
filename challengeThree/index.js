const { iterateOnError } = require('./utils/iterate.js');

(async () => {
  const obj = { x1: { y1: { z1: 'a1' } } };
  const keys = 'x1';
  const data = await iterateOnError(obj, keys);
  console.log(data);
  return data;
})();
