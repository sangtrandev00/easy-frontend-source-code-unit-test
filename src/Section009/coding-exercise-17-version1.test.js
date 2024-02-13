import { isPrimeV1 } from './coding-exercise-17-version1';

describe('isPrimeV1() --', () => {
  test('Should return undefined if is not a number ', () => {
    expect(isPrimeV1('TRan')).toBe(undefined);
    expect(isPrimeV1([])).toBe(undefined);
    expect(isPrimeV1({})).toBe(undefined);
    expect(isPrimeV1(true)).toBe(undefined);
    expect(isPrimeV1(undefined)).toBe(undefined);
  });

  test('Should return false if n < 2 || n is not an interger ( VD: float double... )', () => {
    expect(isPrimeV1(1)).toBe(false);
    expect(isPrimeV1(9.5)).toBe(false);
  });

  test('Should return false if n is not a prime', () => {
    [4, 6, 8, 9, 12].forEach((x) => {
      expect(isPrimeV1(x)).toBe(false);
    });
  });

  test('Should return true if n is a prime', () => {
    [2, 3, 5, 7, 13].forEach((x) => {
      expect(isPrimeV1(x)).toBe(true);
    });
  });
});
