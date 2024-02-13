import { findFirstPositiveEven } from './Array-find-03';

describe('findFirstPositiveEven() --', () => {
  test('should return undefined if can not find positive number', () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
    expect(findFirstPositiveEven([1, 3, 5])).toBe(undefined);
    expect(findFirstPositiveEven([-1, -2, -3])).toBe(undefined);
  });

  test('should return false if every word in array contain space', () => {
    expect(findFirstPositiveEven([1, 4, 5])).toBe(4);
  });
});
