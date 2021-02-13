const { iterateOnError } = require('../utils/iterate.js');

describe('Iterations Tests', () => {

  it('Test First Level Object', async () => {
    const obj = { x1: { y1: { z1: 'a1' } } };
    const key = 'x1'
    const data = await iterateOnError(obj, key);
    expect(data).toStrictEqual({ y1: { z1: 'a1' } });
  });

  it('Test Nested Object', async () => {
    const obj = { x1: { y1: { z1: 'a1' } } };
    const key = 'z1'
    const data = await iterateOnError(obj, key);
    expect(data).toStrictEqual('a1');
  });

  it('Handles Error', async () => {
    const obj = { x1: { y1: { z1: 'a1' } } };
    const key = 'e1'
    const data = await iterateOnError(obj, key);
    expect(data).toStrictEqual({ message: 'error' });
  });

});
