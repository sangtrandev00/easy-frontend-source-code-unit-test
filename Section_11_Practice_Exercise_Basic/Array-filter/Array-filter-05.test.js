import { findAllNumbers } from './Array-filter-05';

describe('findAllNumbers() --', () => {
  test('should return an empty array  ', () => {
    expect(findAllNumbers([1, 3, 5])).toEqual([]);
    expect(findAllNumbers([1, 2, 5])).toEqual([]);
  });

  test('should return an empty array if numberList is not an array ', () => {
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers(20)).toEqual([]);
    expect(findAllNumbers('string')).toEqual([]);
    expect(findAllNumbers(undefined)).toEqual([]);
    expect(findAllNumbers(null)).toEqual([]);
    expect(findAllNumbers(true)).toEqual([]);
  });

  test('Should return some number if this number equal to  first even postive number in array', () => {
    expect(findAllNumbers([1, 4, 5, -6, 4, 5, 4])).toEqual([4, 4]);
  });
});
