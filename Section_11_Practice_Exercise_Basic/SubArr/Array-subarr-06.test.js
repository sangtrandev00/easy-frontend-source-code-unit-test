import { findMaxSumArray } from './Array-subarr-06';

describe('findMaxSumArray() --', () => {
  test('should return list increasing number max', () => {
    expect(findMaxSumArray([])).toEqual([]);
    expect(findMaxSumArray([1, 2, 3, 0, 2, 4])).toEqual([1, 2, 3]);
    expect(findMaxSumArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
