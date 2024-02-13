import { isDivisibleBy10, isDivisibleBy10V2, isDivisibleBy10V3 } from './number08';

describe('isDivisibleBy10() -- V1', () => {
  test('should return false if n is <=0 or n >=1000000', () => {
    expect(isDivisibleBy10(17)).toBe(false);
    expect(isDivisibleBy10(10000001)).toBe(false);
  });

  test('should return false if sum of number of n not divisor for 10', () => {
    // expect(isDivisibleBy10(0)).toBe(false);
    // expect(isDivisibleBy10(10000001)).toBe(false);

    [17, 212, 333, 4567, 12345, 789126].forEach((x) => {
      expect(isDivisibleBy10(x)).toBe(false);
    });
  });

  test('should return true if sum of number of n is a divisor for 10', () => {
    [19, 127, 4510, 73460, 123455].forEach((x) => {
      expect(isDivisibleBy10(x)).toBe(true);
    });
  });
});
// version 2
describe('isDivisibleBy10V2() -- V2', () => {
  test('should return false if n is <=0 or n >=1000000', () => {
    expect(isDivisibleBy10V2(17)).toBe(false);
    expect(isDivisibleBy10V2(10000001)).toBe(false);
  });

  test('should return false if sum of number of n not divisor for 10', () => {
    // expect(isDivisibleBy10V2(0)).toBe(false);
    // expect(isDivisibleBy10V2(10000001)).toBe(false);

    [17, 212, 333, 4567, 12345, 789126].forEach((x) => {
      expect(isDivisibleBy10V2(x)).toBe(false);
    });
  });

  test('should return true if sum of number of n is a divisor for 10', () => {
    [19, 127, 4510, 73460, 123455].forEach((x) => {
      expect(isDivisibleBy10V2(x)).toBe(true);
    });
  });
});

// version 3

describe('isDivisibleBy10V3() -- V3', () => {
  test('should return false if n is <=0 or n >=1000000', () => {
    expect(isDivisibleBy10V3(17)).toBe(false);
    expect(isDivisibleBy10V3(10000001)).toBe(false);
  });

  test('should return false if sum of number of n not divisor for 10', () => {
    // expect(isDivisibleBy10V3(0)).toBe(false);
    // expect(isDivisibleBy10V3(10000001)).toBe(false);

    [17, 212, 333, 4567, 12345, 789126].forEach((x) => {
      expect(isDivisibleBy10V3(x)).toBe(false);
    });
  });

  test('should return true if sum of number of n is a divisor for 10', () => {
    [19, 127, 4510, 73460, 123455].forEach((x) => {
      expect(isDivisibleBy10V3(x)).toBe(true);
    });
  });
});
