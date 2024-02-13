import { generateFibonaci } from './Array-filter-03';

describe('generateFibonaci() --', () => {
  test('should return an array has number from a -> b: ', () => {
    expect(generateFibonaci(5)).toEqual([0, 1, 1, 2, 3]);
    expect(generateFibonaci(10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  test('Should return empty if n is not a number', () => {
    expect(generateFibonaci(undefined)).toEqual([]);
    expect(generateFibonaci(null)).toEqual([]);
    expect(generateFibonaci('string')).toEqual([]);
    expect(generateFibonaci(true)).toEqual([]);
    expect(generateFibonaci(false)).toEqual([]);
  });
});
