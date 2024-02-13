import { sumEvenNumbers } from './Array-sum-01';

describe('sumEvenNumbers() --', () => {
  test('Should return sum of even number that value greater than the previous value', () => {
    expect(sumEvenNumbers([-10, -4, 2, 8, 5])).toBe(6);
    expect(sumEvenNumbers([2, 8, 5, 4])).toBe(8);
    expect(sumEvenNumbers([])).toBe(0);
    expect(sumEvenNumbers([1])).toBe(0);
  });
});
