import { hasTwoDigitsWithSum } from './number09';

describe('hasTwoDigitsWithSum() -- V1', () => {
  test('should return false if n is <=0 or n >=1000000', () => {
    expect(hasTwoDigitsWithSum(9, 1)).toBe(false);
    expect(hasTwoDigitsWithSum(10000001, 1)).toBe(false);
  });

  test('should return false if sum of number of n not divisor for 10', () => {
    // expect(hasTwoDigitsWithSum(0)).toBe(false);
    // expect(hasTwoDigitsWithSum(10000001)).toBe(false);

    [85, 212, 3335, 47679, 123456].forEach((x) => {
      expect(hasTwoDigitsWithSum(x, 12)).toBe(false);
    });
  });

  test('should return true if sum of number of n is a divisor for 10', () => {
    [48, 751, 4812, 48193, 489320].forEach((x) => {
      expect(hasTwoDigitsWithSum(x, 12)).toBe(true);
    });
  });
});
