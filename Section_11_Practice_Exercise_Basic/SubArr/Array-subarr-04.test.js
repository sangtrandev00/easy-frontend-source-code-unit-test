import { findAllPositiveEvenSubArr } from './Array-subarr-04';

describe('findAllPositiveEvenSubArr() --', () => {
  test('should return empty if numberList is not an arry or empty', () => {
    expect(findAllPositiveEvenSubArr([])).toEqual([]);
    expect(findAllPositiveEvenSubArr({})).toEqual([]);
    expect(findAllPositiveEvenSubArr(undefined)).toEqual([]);
    expect(findAllPositiveEvenSubArr(123)).toEqual([]);
    expect(findAllPositiveEvenSubArr('string')).toEqual([]);
    expect(findAllPositiveEvenSubArr(true)).toEqual([]);
    expect(findAllPositiveEvenSubArr(null)).toEqual([]);
  });

  test('Should return empty if can not find any positive even number continuous', () => {
    expect(findAllPositiveEvenSubArr([-1, -2, -3, 3, 7, 9])).toEqual([]);
  });

  test('Should return list of arr if have some positive even number continuous', () => {
    expect(findAllPositiveEvenSubArr([1, 2, 4, 3, 5, 10, 20])).toEqual([
      [2, 4],
      [10, 20],
    ]);
    expect(findAllPositiveEvenSubArr([-1, -2, -4, 3, 5, 10, 20])).toEqual([[10, 20]]);
  });
});
