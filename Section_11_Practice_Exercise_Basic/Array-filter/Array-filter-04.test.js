import { generatePrimeNumbers } from './Array-filter-04';

describe('generatePrimeNumbers() --', () => {
  test('should return an array has number from a -> b: ', () => {
    expect(generatePrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    expect(generatePrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  test('Should return empty if n is not a number', () => {
    expect(generatePrimeNumbers(undefined)).toEqual([]);
    expect(generatePrimeNumbers(null)).toEqual([]);
    expect(generatePrimeNumbers('string')).toEqual([]);
    expect(generatePrimeNumbers(true)).toEqual([]);
    expect(generatePrimeNumbers(false)).toEqual([]);
  });
});
