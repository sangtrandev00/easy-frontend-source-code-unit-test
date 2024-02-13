import { sumAllMinDigits } from './Array-sum-03';

describe('sumAllMinDigits() --', () => {
  test('Should return sum of every digit in array', () => {
    expect(sumAllMinDigits([])).toBe(0);
    expect(sumAllMinDigits([4])).toBe(4);
    expect(sumAllMinDigits([123, 4])).toBe(5);
    expect(sumAllMinDigits([1234, 55])).toBe(6);
    expect(sumAllMinDigits([123, 532])).toBe(3);
  });
});
