import { hasFibonaciNumber } from './Array-check-12';

describe('hasFibonaciNumber() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(hasFibonaciNumber('string')).toBe(false);
    expect(hasFibonaciNumber(undefined)).toBe(false);
    expect(hasFibonaciNumber({})).toBe(false);
    expect(hasFibonaciNumber(true)).toBe(false);
    expect(hasFibonaciNumber(123)).toBe(false);
  });

  test('should return false if an arr is doesnot have any fibonaci value < 100', () => {
    expect(hasFibonaciNumber([33, 35, 46])).toBe(false);
  });

  test('should return true if arr have at least a fibonacci value', () => {
    expect(hasFibonaciNumber([3, 2, 1])).toBe(true);
  });
});
