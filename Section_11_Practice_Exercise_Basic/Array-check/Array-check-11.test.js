import { isSymmetricList } from './Array-check-11';

describe('isSymmetricList() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(isSymmetricList('string')).toBe(false);
    expect(isSymmetricList(undefined)).toBe(false);
    expect(isSymmetricList({})).toBe(false);
    expect(isSymmetricList(true)).toBe(false);
    expect(isSymmetricList(123)).toBe(false);
  });

  test('should return false if an arr is not an isSymmetricList number', () => {
    expect(isSymmetricList([1, 1, 3])).toBe(false);
    expect(isSymmetricList([1, 6])).toBe(false);
    expect(isSymmetricList([])).toBe(false);
  });

  test('should return true if arr is an isSymmetricList number', () => {
    expect(isSymmetricList([1, 2, 1])).toBe(true);
    expect(isSymmetricList([1, 1])).toBe(true);
    expect(isSymmetricList([1, 2, 2, 1])).toBe(true);
    expect(isSymmetricList([1, 2, 5, 2, 1])).toBe(true);
  });
});
