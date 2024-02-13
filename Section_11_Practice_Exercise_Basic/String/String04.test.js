import { countEmails } from './String04';

describe('countEmails() -- V1', () => {
  test('should return 0 if string is empty || String is not have @ in it}', () => {
    // expect(statisticsCharacters(null)).toBe(0);
    expect(countEmails('')).toBe(0);
  });

  test('Should return 0 if @ is in the first of a string or @ is in the last of a string, or @ is not including in a string', () => {
    expect(countEmails('hello@')).toBe(0);
    expect(countEmails('@123')).toBe(0);
    expect(countEmails('tran nhat sang')).toBe(0);
  });

  //   test('Should return 0 if str is not including .com .com.vn .vn')

  test('should return 0 if string is not have any email', () => {
    expect(countEmails('abc a@a.com')).toBe(0);
    expect(countEmails('abc @bla.com')).toBe(0);
    expect(countEmails('abc ab@.com')).toBe(0);
    expect(countEmails('abc abc@.com')).toBe(0);
  });
  test('should return number of email in string contains some emails', () => {
    expect(countEmails('my email should be abc@super.com')).toBe(1);
    expect(countEmails(' easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn')).toBe(3);
  });
});
