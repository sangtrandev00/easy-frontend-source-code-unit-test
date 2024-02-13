import { findLongestWord } from './Array-find-02';

describe('findLongestWord() --', () => {
  test('should return false if every word in array longer 5 character', () => {
    expect(findLongestWord(['nguyen', 'davidBeck'])).toBe('');
    expect(findLongestWord(['DavidBecker', 'alision'])).toBe('');
    expect(findLongestWord('')).toBe('');
  });

  test('should return false if every word in array contain space', () => {
    expect(findLongestWord(['tran van', 'tran thi tuan minh'])).toBe('');
    expect(findLongestWord([' tran van ', 'ha thi loan'])).toBe('');
    expect(findLongestWord(['tran van ', ' sang'])).toBe('');
    expect(findLongestWord([' tran', ' nhi'])).toBe('');
  });

  test('should return longest word if found', () => {
    expect(findLongestWord(['DAVID', 'cool', 'inta'])).toBe('DAVID');
    expect(findLongestWord(['hel', 'super'])).toBe('super');
  });
});
