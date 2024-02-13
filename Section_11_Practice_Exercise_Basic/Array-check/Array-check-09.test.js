import { isIncreasingNumberList } from './Array-check-09';

describe('isIncreasingNumberList() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(isIncreasingNumberList('string')).toBe(false);
    expect(isIncreasingNumberList(undefined)).toBe(false);
    expect(isIncreasingNumberList({})).toBe(false);
    expect(isIncreasingNumberList(true)).toBe(false);
    expect(isIncreasingNumberList(123)).toBe(false);
  });

  test('should return false if an arr is not an increasing number', () => {
    expect(isIncreasingNumberList([1, 1])).toBe(false);
    expect(isIncreasingNumberList([1, 0])).toBe(false);
    expect(isIncreasingNumberList([1])).toBe(false);
  });

  test('should return true if arr is an increasing number', () => {
    expect(isIncreasingNumberList([0, 1, 3])).toBe(true);
  });
});
