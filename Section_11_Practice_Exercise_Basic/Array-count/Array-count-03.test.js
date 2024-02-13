import { countWords } from './Array-count-03';

describe('countWords() --', () => {
  test('Should return 0 if not contain this number less than the previous number', () => {
    expect(countWords(['easy', 'frontend'], 4)).toBe(2);
    expect(countWords(['easy', 'frontend'], 5)).toBe(1);
    expect(countWords(['easy', 'frontend'], 10)).toBe(0);
  });
});
