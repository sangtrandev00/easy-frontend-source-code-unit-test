import { isIncreasingNumberMethod2 } from './11-03-main-v2';

describe('Test isIncreasingNumber ', () => {
  test('should return fasle if n > 1000000 or n <=0', () => {
    expect(isIncreasingNumberMethod2(0)).toBe(false);
    expect(isIncreasingNumberMethod2(1000000001)).toBe(false);
  });

  test('should return false if n has number of letter is less than 2', () => {
    expect(isIncreasingNumberMethod2(1)).toBe(false);
  });
  test('should return false if right number greater or equal than left number of n', () => {
    expect(isIncreasingNumberMethod2(32)).toBe(false);
    expect(isIncreasingNumberMethod2(164)).toBe(false);
    expect(isIncreasingNumberMethod2(80992)).toBe(false);
    expect(isIncreasingNumberMethod2(22222)).toBe(false);
  });

  test('Should return true if n is an inscreasing number', () => {
    expect(isIncreasingNumberMethod2(12345)).toBe(true);
  });
});
