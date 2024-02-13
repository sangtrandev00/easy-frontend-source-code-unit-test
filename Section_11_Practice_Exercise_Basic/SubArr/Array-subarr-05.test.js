import { findMaxSumArray } from './Array-subarr-05';

describe('findMaxSumArray() --', () => {
  test('should return list arr contain even postive number', () => {
    expect(findMaxSumArray([])).toBe(0);
    expect(findMaxSumArray([1, 2, 3])).toBe(6);
    expect(findMaxSumArray([1, 2, 3, 0, 10, 20])).toBe(30);
  });
});
