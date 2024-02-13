const sayHello = require('./05-exercise-02');

describe('sayHello() -- ', () => {
  test('should return undefined if languageCode is not a string', () => {
    expect(sayHello(null)).toBeUndefined();
    expect(sayHello(undefined)).toBeUndefined();
    expect(sayHello(123)).toBeUndefined();
    expect(sayHello([])).toBeUndefined();
    expect(sayHello({})).toBeUndefined();
  });

  test('should return the hello in target language if languageCode is en,cn,jp,ko,..', () => {
    expect(sayHello('vi')).toBe('Xin chào');
    expect(sayHello('fr')).toBe('Bonjour');
    expect(sayHello('cn')).toBe('Nǐn hǎo');
    expect(sayHello('ja')).toBe('Konnichiwa');
    expect(sayHello('ko')).toBe('Anyoung haseyo');
    expect(sayHello('en')).toBe('Hello');
  });

  test('should return the hello if language code is english or not including in 4 remain language code', () => {
    expect(sayHello('dfsdf')).toBe('Hello');
  });
});
