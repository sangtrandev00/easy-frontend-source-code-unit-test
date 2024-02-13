import { findAllDecreasingSubArr } from './Array-subarr-02';

describe('findAllDecreasingSubArr() --', () => {
  test('should return a list of arr that is descreasing number', () => {
    expect(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20])).toEqual([
      [3, 2, 1],
      // [15, 10],
    ]);
    expect(findAllDecreasingSubArr([1, 2, 3, -5, -10, 5, 10, 5, 6, 12, -8, 1])).toEqual([
      [3, -5, -10],
      // [10, 5],
      // [12, -8],
    ]);
  });
});
