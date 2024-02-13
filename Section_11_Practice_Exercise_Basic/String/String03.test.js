import { statisticsCharacters } from './String03';

describe('statisticsCharacters() -- V1', () => {
  test('should return {} if string is empty}', () => {
    // expect(statisticsCharacters(null)).toBe(0);
    expect(statisticsCharacters('')).toEqual({});
  });

  test('should return sattics of words in obj if string is a sentences', () => {
    expect(statisticsCharacters('aa b cc')).toEqual({
      a: 2,
      b: 1,
      c: 2,
      space: 2,
    });
    expect(statisticsCharacters('   ')).toEqual({
      space: 3,
    });
    expect(statisticsCharacters('Tran')).toEqual({
      T: 1,
      r: 1,
      a: 1,
      n: 1,
    });
  });
});
