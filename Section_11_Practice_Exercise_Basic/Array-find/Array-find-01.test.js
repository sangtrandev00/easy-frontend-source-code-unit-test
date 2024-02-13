import { findMinPositive } from './Array-find-01';

describe('findMinPositive() --', () => {
  test('should return undefined if numberList is empty', () => {
    expect(findMinPositive([])).toBe(undefined);
  });

  test('should return undefined if numberList is all negative numbers', () => {
    expect(findMinPositive([-1, -2, -3])).toBe(undefined);
  });

  test('should return value if find min of postive number in array', () => {
    expect(findMinPositive([-1, -5, 2, 6])).toBe(2);
    expect(findMinPositive([-1, -5, 2, 6, -6, 12, -5, 1])).toBe(1);
  });
});
