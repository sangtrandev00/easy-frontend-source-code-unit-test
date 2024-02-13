import { findNumbers } from './Array-filter-02';

describe('findNumbers() --', () => {
  test('should empty array if numberList length == 1 ', () => {
    expect(findNumbers([5])).toEqual([]);
  });

  test('Should return list of array if it valid with the requirement', () => {
    expect(findNumbers([2, 5, 3, 7])).toEqual([5, 7]);
    expect(findNumbers([10, 12, 45, 7])).toEqual([12, 45]);
  });

  test('Should return undefined if numberList is not an array', () => {
    expect(findNumbers(2)).toEqual(undefined);
    expect(findNumbers('string')).toEqual(undefined);
    expect(findNumbers({})).toEqual(undefined);
  });
});
