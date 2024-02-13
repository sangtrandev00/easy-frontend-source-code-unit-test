import { countNumbersNotInB } from './Array-count-05';

describe('countNumbersNotInB() --', () => {
  test('Should return amount of number has in a not in b', () => {
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});
