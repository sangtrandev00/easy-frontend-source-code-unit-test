import { isPerfectNumber } from './coding-exercise-19';

describe('isPerfect number', () => {
  test('should return undefined if n is < 5 or n >= 1000', () => {
    expect(isPerfectNumber(4)).toBe(undefined);
    expect(isPerfectNumber(10002)).toBe(undefined);
  });

  test('should return false it is not a prefect number', () => {
    expect(isPerfectNumber(1324)).false;
    expect(isPerfectNumber(244)).false;
    expect(isPerfectNumber(245246)).false;
  });

  test('Should return true if n is a perfect number', () => {
    [6, 28].forEach((x) => expect(isPerfectNumber(x)).toBe(true));
  });
});
