import { insert } from './Array-cd-04';

describe('insert() --', () => {
  test('should return list of number after insert a number', () => {
    expect(insert([], 3)).toEqual([3]);
    expect(insert([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
  });
});
