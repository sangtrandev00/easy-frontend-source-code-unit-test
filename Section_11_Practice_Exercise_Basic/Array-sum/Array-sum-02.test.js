import { sumAllDigits } from './Array-sum-02';

describe('sumAllDigits() --', () => {
  test('Should return sum of every digit in array', () => {
    expect(sumAllDigits([])).toBe(0);
    expect(sumAllDigits([4])).toBe(4);
    expect(sumAllDigits([123, 4])).toBe(10);
    expect(sumAllDigits([1234, 55])).toBe(20);
  });
});
