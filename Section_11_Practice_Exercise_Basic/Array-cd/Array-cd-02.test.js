import { remove } from './Array-cd-02';

describe('remove() --', () => {
  test('should return list of number after remove a number', () => {
    expect(remove([1, 2, 3], -1, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 3, 10)).toEqual([1, 2, 3]);
    expect(remove([1, 2, 3], 1, 2)).toEqual([1]);
    expect(remove([1, 2, 3], 0)).toEqual([]);
  });

  test('Should return undefined if para is not valid', () => {
    expect(remove([])).toEqual(undefined);
  });
});
