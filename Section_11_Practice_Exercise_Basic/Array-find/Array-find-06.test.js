import { findLastPerfectSquare } from './Array-find-06';

describe('findLastPerfectSquare() --', () => {
  test('should return undefined if can not find positive number', () => {
    expect(findLastPerfectSquare([])).toBe(undefined);
    expect(findLastPerfectSquare([2, 3, 5])).toBe(undefined);
    expect(findLastPerfectSquare([-2, -4, -6])).toBe(undefined);
  });

  test('should return false if every word in array contain space', () => {
    expect(findLastPerfectSquare([4, 16, 36, 40])).toBe(36);
    expect(findLastPerfectSquare([4, 3, 12])).toBe(4);
  });
});
