import { findLastNegativeOdd } from './Array-find-04';

describe('findLastNegativeOdd() --', () => {
  test('should return undefined if can not find positive number', () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
    expect(findLastNegativeOdd([1, 3, 5])).toBe(undefined);
    expect(findLastNegativeOdd([-2, -4, -6])).toBe(undefined);
  });

  test('should return false if every word in array contain space', () => {
    expect(findLastNegativeOdd([-1, -4, -5])).toBe(-5);
    expect(findLastNegativeOdd([-1, -4, -8])).toBe(-1);
  });
});
