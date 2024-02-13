import { findAllNumbers } from './Array-filter-06';

describe('findAllNumbers() --', () => {
  test('should return an empty array  ', () => {
    expect(findAllNumbers([2, 4, 6])).toEqual([]);
    expect(findAllNumbers([234, 428])).toEqual([]);
  });

  test('should return an empty array if numberList is not an array ', () => {
    expect(findAllNumbers({})).toEqual([]);
    expect(findAllNumbers(20)).toEqual([]);
    expect(findAllNumbers('string')).toEqual([]);
    expect(findAllNumbers(undefined)).toEqual([]);
    expect(findAllNumbers(null)).toEqual([]);
    expect(findAllNumbers(true)).toEqual([]);
  });

  test('Should return an array if an array contain a number start with odd number', () => {
    expect(findAllNumbers([1, 4, 5])).toEqual([1, 5]);
    expect(findAllNumbers([234, 421, 125])).toEqual([125]);
  });
});
