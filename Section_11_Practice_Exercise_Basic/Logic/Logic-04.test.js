import { findMostFrequentNumber } from './Logic-04';

describe('findMostFrequentNumber() --', () => {
  test('should return a number that missing in arr from [5...n]', () => {
    expect(findMostFrequentNumber([])).toBe(undefined);
    expect(findMostFrequentNumber([1])).toBe(1);
    expect(findMostFrequentNumber([1, 2, 3, 2])).toBe(2);
    expect(findMostFrequentNumber([1, 2, 3, 2, 3, 4])).toBe(2);
    expect(findMostFrequentNumber([1, 3, 3, 3, 2, 3, 4])).toBe(3);
  });
});
