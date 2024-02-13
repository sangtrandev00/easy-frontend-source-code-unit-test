import { countWords, countWordsV2 } from './String01';

describe('countWords() -- V1', () => {
  test('should return 0 if str is null or empty or not a string', () => {
    expect(countWords(null)).toBe(0);
    expect(countWords()).toBe(0);
    expect(countWords({})).toBe(0);
    expect(countWords(true)).toBe(0);
    expect(countWords(123)).toBe(0);
    expect(countWords([])).toBe(0);
  });

  test('should return number of word', () => {
    expect(countWords('tran')).toBe(1);
    expect(countWords('tran nhat')).toBe(2);
    expect(countWords('Tran Nhat Sang')).toBe(3);
    expect(countWords('Tran Nhat Sang muon thanh cong')).toBe(6);
    expect(countWords('Tran Nhat Sang hoc lap trinh rat gioi')).toBe(8);
  });
});

describe('countWordsV2() -- V2', () => {
  test('should return 0 if str is null or empty or not a string', () => {
    expect(countWordsV2(null)).toBe(0);
    expect(countWordsV2()).toBe(0);
    expect(countWordsV2({})).toBe(0);
    expect(countWordsV2(true)).toBe(0);
    expect(countWordsV2(123)).toBe(0);
    expect(countWordsV2([])).toBe(0);
  });

  test('should return number of word', () => {
    expect(countWordsV2('tran')).toBe(1);
    expect(countWordsV2('tran nhat')).toBe(2);
    expect(countWordsV2('Tran Nhat Sang')).toBe(3);
    expect(countWordsV2('Tran Nhat Sang muon thanh cong')).toBe(6);
    expect(countWordsV2('Tran Nhat Sang hoc lap trinh rat gioi')).toBe(8);
  });
});
