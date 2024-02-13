import { findLastUrl } from './Array-find-08';

describe('findLastUrl() --', () => {
  test('should return undefined if strList is empty', () => {
    expect(findLastUrl([])).toBe(undefined);
  });

  test('should return "" if strList is invalid', () => {
    expect(findLastUrl(['https://google', 'https://youtube'])).toBe(undefined);
    expect(findLastUrl(['google.com', 'youtube.com.vn'])).toBe(undefined);
  });

  test('should return second largest number if  word in array fullfill the condition', () => {
    expect(findLastUrl(['https://google.com', 'wss://chat.sample.com'])).toBe(
      'wss://chat.sample.com'
    );
  });
});
