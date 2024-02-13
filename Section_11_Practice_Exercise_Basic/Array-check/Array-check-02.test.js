import { hasOddNumberDivisibleBy3, hasOddNumberDivisibleBy3V2 } from './Array-check-02';

describe('hasOddNumberDivisibleBy3() --', () => {
  test('should return 0 if numberList is not empty', () => {
    expect(hasOddNumberDivisibleBy3([])).toBe(false);
  });

  test('should return 0 if numberList is not including any odd numbers', () => {
    expect(hasOddNumberDivisibleBy3([2, 4, 6, 8, 10])).toBe(false);
  });

  test('should return true if numberList cotains odd numbers and divisor for 3', () => {
    expect(hasOddNumberDivisibleBy3([1, 3, 5, 9, 12])).toBe(true);
  });

  //   test('should return .....', () => {
  //     expect(hasOddNumberDivisibleBy3()).toBe();
  //   });
});

describe('hasOddNumberDivisibleBy3V2() --', () => {
  test('should return 0 if numberList is not empty', () => {
    expect(hasOddNumberDivisibleBy3V2([])).toBe(false);
  });

  test('should return 0 if numberList is not including any odd numbers', () => {
    expect(hasOddNumberDivisibleBy3V2([2, 4, 6, 8, 10])).toBe(false);
  });

  test('should return true if numberList cotains odd numbers and divisor for 3', () => {
    expect(hasOddNumberDivisibleBy3V2([1, 3, 5, 9, 12])).toBe(true);
  });

  //   test('should return .....', () => {
  //     expect(hasOddNumberDivisibleBy3V2()).toBe();
  //   });
});
