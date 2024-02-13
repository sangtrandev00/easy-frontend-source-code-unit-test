import { statisticsNumbers } from './Logic-03';

describe('statisticsNumbers() --', () => {
  test('should return a number that missing in arr from [5...n]', () => {
    expect(statisticsNumbers([])).toEqual({});
    expect(statisticsNumbers([1, 1, 1, 2, 2, 3])).toEqual({
      1: 3,
      2: 2,
      3: 1,
    });
  });
});
