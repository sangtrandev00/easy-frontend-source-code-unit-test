import { isDescreasingNumberList } from './Array-check-10';

describe('isDescreasingNumberList() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(isDescreasingNumberList('string')).toBe(false);
    expect(isDescreasingNumberList(undefined)).toBe(false);
    expect(isDescreasingNumberList({})).toBe(false);
    expect(isDescreasingNumberList(true)).toBe(false);
    expect(isDescreasingNumberList(123)).toBe(false);
  });

  test('should return false if an arr is not an increasing number', () => {
    expect(isDescreasingNumberList([1, 1])).toBe(false);
    expect(isDescreasingNumberList([1, 6])).toBe(false);
  });

  test('should return true if arr is an increasing number', () => {
    expect(isDescreasingNumberList([3, 2, 1])).toBe(true);
  });
});
