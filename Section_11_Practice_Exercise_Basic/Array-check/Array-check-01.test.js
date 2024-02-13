import { hasEvenNumberGreaterThanN } from './ARRAY-CHECK-01';

describe('hasEvenNumberGreaterThanN() --', () => {
  test('should return false if numberList arr is empty', () => {
    expect(hasEvenNumberGreaterThanN([], 1)).toBe(false);
  });

  test('should return false if all even number in arr is less than n', () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 3, 4, 5, 6, 7, 8], 9)).toBe(false);
  });

  test('should return true if has an even number is greater than n ', () => {
    expect(hasEvenNumberGreaterThanN([1, 2, 4, 6, 45, 7, 5, 12], 11)).toBe(true);
  });

  test('should return false if all number in array is odd numbers', () => {
    expect(hasEvenNumberGreaterThanN([1, 3, 5, 7, 9])).toBe(false);
  });
});
