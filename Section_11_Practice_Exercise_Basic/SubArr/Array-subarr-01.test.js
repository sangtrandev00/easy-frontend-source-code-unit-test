import { findAllIncreasingSubArr } from './Array-subarr-01';

describe('findAllIncreasingSubArr() --', () => {
  test('should return a list of number after remove the repeat number', () => {
    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
    ]);

    expect(findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10, 5, 6, 12, -8, 1])).toEqual([
      [1, 2, 3],
      [-10, 5, 10],
      [5, 6, 12],
      [-8, 1],
    ]);
  });
});
