const randomNumberN = require('./06-06-main');

describe('randomNumberN() -- version', () => {
  test('should return -1 if n<=0', () => {
    expect(randomNumberN(0)).toBe(-1);
    expect(randomNumberN(-1)).toBe(-1);
  });

  test('Should return undefined if n is not a number', () => {
    expect(randomNumberN({})).toBe(undefined);
    expect(randomNumberN()).toBe(undefined);
  });

  test('Should return [0 -> n] if n is valid', () => {
    expect(randomNumberN(4)).toBeLessThanOrEqual(4);
    expect(randomNumberN(13)).toBeLessThanOrEqual(13);
  });
});
