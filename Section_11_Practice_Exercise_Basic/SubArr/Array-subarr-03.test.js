import { isSubArray } from './Array-subarr-03';

describe('isSubArray() --', () => {
  test('should return list of number after isSubArray a number', () => {
    expect(isSubArray([], [1])).toBe(true);
    expect(isSubArray([1], [1, 2])).toBe(true);
    expect(isSubArray([1, 2], [2, 3, 4])).toBe(false);
    expect(isSubArray([1, 2], [4, 10, 1, 2, 3])).toBe(true);
    expect(isSubArray([1, 2, 3], [4, 10, 1, 2, 3])).toBe(true);
    expect(isSubArray([3, 2, 1], [4, 10, 1, 2, 3])).toBe(false);
    expect(isSubArray([1, 2, 3, 4, 6, 7], [4, 10, 1, 2, 3])).toBe(false);
  });
});
