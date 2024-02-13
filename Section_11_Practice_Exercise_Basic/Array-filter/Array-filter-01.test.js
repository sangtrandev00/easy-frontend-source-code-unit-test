import { generateNumberInRange } from './Array-filter-01';

describe('generateNumberInRange() --', () => {
  test('should return an array has number from a -> b: ', () => {
    expect(generateNumberInRange(1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(generateNumberInRange(5, 7)).toEqual([5, 6, 7]);
  });

  test('Should return empty array if a > b', () => {
    expect(generateNumberInRange(7, 5)).toEqual([]);
  });

  // test('Should return undefined if a, b is empty', () => {
  //   expect(generateNumberInRange().toBe(undefined));
  // });
});
