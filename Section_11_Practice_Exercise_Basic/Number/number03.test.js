import { isIncreasingNumberByDistance } from './number03';

describe('isIncreasingNumberByDistance(n,x) --', () => {
  test('should return false if n <=0 || n > 1000000', () => {
    expect(isIncreasingNumberByDistance(0, 1)).toBe(false);
    expect(isIncreasingNumberByDistance(1000000, 1)).toBe(false);
  });

  test('should return fasle if n <= 9', () => {
    Array.from({ length: 10 }, (n, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(false);
    });
  });

  test('Should return false if n is not an increasing number ', () => {
    [31, 321, 444, 55555, 666666].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(false);
    });
  });

  test('Shoud return false if distance is not equal to x', () => {
    [134, 1347, 13489, 145689].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(false);
    });
  });

  test('Should return true if n is an increasing number by distance', () => {
    [123, 3456, 56789, 456789].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(true);
    });
  });
});
