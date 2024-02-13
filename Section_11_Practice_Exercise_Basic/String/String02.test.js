import { statisticsWords } from './String02';

describe('statisticsWords() -- V1', () => {
  test('should return {} if string is empty}', () => {
    // expect(statisticsWords(null)).toBe(0);
    expect(statisticsWords('')).toEqual({});
  });

  test('should return sattics of words in obj if string is a sentences', () => {
    expect(statisticsWords('tran nhat sang')).toEqual({
      tran: 1,
      nhat: 1,
      sang: 1,
    });
    expect(statisticsWords('easy frontend is easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
    });
    expect(statisticsWords('Tran')).toEqual({
      Tran: 1,
    });
  });
});
