import { findMissingNumber } from './Logic-02';

describe('findMissingNumber() --', () => {
  test('should return a number that missing in arr from [5...n]', () => {
    expect(findMissingNumber([5, 6, 8, 9, 10], 10)).toBe(7);
    expect(findMissingNumber([5], 6)).toBe(6);
    expect(findMissingNumber([5], 3)).toBe(undefined);
    expect(findMissingNumber([1, 8, 9], 10)).toBe(undefined);
    expect(findMissingNumber([5, 8, 11], 11)).toBe(undefined); // vi co toi 4 con sos bi thieu trong mang
    expect(findMissingNumber([5, 6, 7, 8, 9, 10, 11], 11)).toBe(undefined);
  });
});
