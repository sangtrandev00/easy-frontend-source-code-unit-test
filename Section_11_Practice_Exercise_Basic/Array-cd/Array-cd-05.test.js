import { removeDuplicatedNumbers } from './Array-cd-05';

describe('removeDuplicatedNumbers() --', () => {
  test('should return a list of number after remove the repeat number', () => {
    expect(removeDuplicatedNumbers([])).toEqual([]);
    expect(removeDuplicatedNumbers([1, 1, 2, 3, 2])).toEqual([3]);
    expect(removeDuplicatedNumbers([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
