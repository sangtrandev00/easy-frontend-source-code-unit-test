import { insert } from './Array-cd-01';

describe('insert() --', () => {
  test('should return list of number after insert a number', () => {
    expect(insert([1, 2, 3], 0, -1)).toEqual([0, 1, 2, 3]);
    expect(insert([1, 2, 3], 4, 10)).toEqual([1, 2, 3, 4]);
    expect(insert([1, 2, 3], 10, 2)).toEqual([1, 2, 10, 3]);
  });

  test('Should return undefined if para is not valid', () => {
    expect(insert([])).toEqual(undefined);
  });
});
