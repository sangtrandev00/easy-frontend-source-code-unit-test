import { countUniqueNumbers } from './Array-count-04';

describe('countUniqueNumbers() --', () => {
  test('Should return 0 if not contain this number less than the previous number', () => {
    expect(countUniqueNumbers([])).toBe(0);
    expect(countUniqueNumbers([1, 1, 1, 1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 2, 3, 1])).toBe(3);
  });
});
