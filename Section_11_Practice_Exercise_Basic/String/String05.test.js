import { countURLs } from './String05';

describe('countURLs() -- V1', () => {
  test('should return 0 if string is empty}', () => {
    // expect(countURLs(null)).toBe(0);
    expect(countURLs('')).toBe(0);
  });

  test('should return number of urls if url string is including some urls', () => {
    expect(countURLs('my website is: http://ezfrontend.com you can visit it')).toBe(1);
    expect(countURLs('http://mywebsite.com.vn')).toBe(1);
    expect(countURLs('ws://mywebsite.com.vn')).toBe(1);
    expect(countURLs('wss://mywebsite.com.vn')).toBe(1);
  });
  test('Should return 0 if string in not including any urls', () => {
    expect(countURLs('fsaf  fsdf')).toBe(0);
  });

  test('Should return 0 if string in not including .com, .com.vn hoac .vn', () => {
    expect(countURLs('https://rosissport')).toBe(0);
  });

  test('Should retun 0 if url has domain name is less than 3 character', () => {
    expect(countURLs('my website is: https://ez.com you can visit it')).toBe(0);
  });
});
