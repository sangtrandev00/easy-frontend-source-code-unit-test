import { uniqueArray } from './Array-cd-06';

describe('uniqueArray() --', () => {
  test('should return list of number after uniqueArray a number', () => {
    expect(uniqueArray([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(uniqueArray([1, 1, 1, 1])).toEqual([1]);
  });
});
