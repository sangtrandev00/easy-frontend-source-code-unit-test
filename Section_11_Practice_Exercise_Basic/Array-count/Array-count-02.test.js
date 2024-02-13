import { countNumbers } from './Array-count-02';

describe('countNumbers() --', () => {
  test('Should return 0 if not contain this number less than the previous number', () => {
    expect(countNumbers([1, 2, 3])).toBe(0);
  });

  test('Should return count of number that number is less than the previous number', () => {
    expect(countNumbers([1, 2, 3, 10, 9, 8])).toBe(2);
  });
});
