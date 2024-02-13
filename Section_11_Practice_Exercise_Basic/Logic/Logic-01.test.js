import { findSumPair } from './Logic-01';

describe('findSumPair() --', () => {
  test('should return an array that contain 2 number has sum === targetSum', () => {
    expect(findSumPair({})).toEqual([]);
    expect(findSumPair([], 10)).toEqual([]);
    expect(findSumPair([1, 2], 2)).toEqual([]);
    expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
    expect(findSumPair([3, 2], 5)).toEqual([2, 3]);
  });
});
