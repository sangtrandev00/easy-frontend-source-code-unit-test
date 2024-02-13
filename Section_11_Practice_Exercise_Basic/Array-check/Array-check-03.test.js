import { hasEasyFrontend } from './Array-check-03';

describe('hasEasyFrontend() --', () => {
  test('should return false if wordList is not an array', () => {
    expect(hasEasyFrontend({})).toBe(false);
    expect(hasEasyFrontend('string')).toBe(false);
    expect(hasEasyFrontend(123)).toBe(false);
    expect(hasEasyFrontend(undefined)).toBe(false);
    expect(hasEasyFrontend(true)).toBe(false);
  });

  test('should return false if wordList is not including easy and frontend', () => {
    expect(hasEasyFrontend(['easy', ''])).toBe(false);
    expect(hasEasyFrontend(['noasy', 'frontend'])).toBe(false);
  });

  test('should return true if easy front is in array', () => {
    expect(hasEasyFrontend(['easy', 'frontend'])).toBe(true);
    expect(hasEasyFrontend(['easy frontend', ''])).toBe(true);
  });

  // test('should return .....', () => {
  //   expect(hasEasyFrontend()).toBe();
  // });
});
