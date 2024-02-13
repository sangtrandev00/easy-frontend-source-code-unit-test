import { hasFalsy } from './Array-check-05';

describe('hasFalsy() --', () => {
  test('should return false if arr is not an arry', () => {
    expect(hasFalsy('string')).toBe(false);
    expect(hasFalsy(undefined)).toBe(false);
    expect(hasFalsy({})).toBe(false);
    expect(hasFalsy(true)).toBe(false);
    expect(hasFalsy(123)).toBe(false);
  });

  test('should return false if an arr does not have  any falsy value', () => {
    expect(hasFalsy(['easy', 123])).toBe(false);
    expect(hasFalsy([true, ' '])).toBe(false);
  });

  test('should return true if arr contains at least a falsy value', () => {
    expect(hasFalsy([false, 1234])).toBe(true);
    expect(hasFalsy([false, '1234'])).toBe(true);
  });
});
