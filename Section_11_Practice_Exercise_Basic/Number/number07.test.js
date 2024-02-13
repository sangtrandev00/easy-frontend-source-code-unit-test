import { isSymetricNumber } from './number07';

describe('isSymetricNumber() --', () => {
  test('should return false if n is < =1 or n >=1000000', () => {
    expect(isSymetricNumber(0)).toBe(false);
    expect(isSymetricNumber(10000001)).toBe(false);
  });

  test('should return false if n is not a symetricNumber', () => {
    // expect(isSymetricNumber(0)).toBe(false);
    // expect(isSymetricNumber(10000001)).toBe(false);

    [2, 32, 334, 5556, 77982, 224564].forEach((x) => {
      expect(isSymetricNumber(x)).toBe(false);
    });
  });

  test('should return true if n is a symetricNumber', () => {
    [11, 212, 3223, 77977, 889988].forEach((x) => {
      expect(isSymetricNumber(x)).toBe(true);
    });
  });
});
