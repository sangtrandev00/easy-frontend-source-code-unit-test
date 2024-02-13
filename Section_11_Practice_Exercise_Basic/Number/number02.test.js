import { isDescreasingNumber } from './number02';

describe('test isDescreasingNumber --', () => {
  test('should return false if n <=0 || n> 1000000', () => {
    expect(isDescreasingNumber(0)).toBe(false);
    expect(isDescreasingNumber(100000000)).toBe(false);
  });

  test('should return false if n < 10', () => {
    Array.from({ length: 10 }, (n, idx) => idx).forEach((x) => {
      expect(isDescreasingNumber(x)).toBe(false);
    });
  });

  test('Should return false if n is not a descreasing number', () => {
    [22, 333, 4444, 55555, 654852].forEach((x) => {
      expect(isDescreasingNumber(x)).toBe(false);
    });
  });

  test('Should return true if n is a descreasing number', () => {
    [21, 321, 4321, 54321, 654321].forEach((x) => {
      expect(isDescreasingNumber(x)).toBe(true);
    });
  });
});
