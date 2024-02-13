const randomNumberFromAtoB = require('./06-06-main-v2');

describe('randomNumberFromAtoBe() -- ', () => {
  test('should return a random number from a to b', () => {
    expect(randomNumberFromAtoB(4, 7)).toBeLessThanOrEqual(7);
    expect(randomNumberFromAtoB(4, 7)).toBeGreaterThanOrEqual(4);
  });

  test('should return -1 if a <= 0 || a >= b || b <= 0', () => {
    expect(randomNumberFromAtoB(0, 7)).toBe(-1);
    expect(randomNumberFromAtoB(0, 0)).toBe(-1);
    expect(randomNumberFromAtoB(4, 0)).toBe(-1);
  });
});
