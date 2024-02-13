const errorCode = require('./05-10-main-practice');

describe('errorCode --version 1', () => {
  test('Shoud return something went wrong if message is not belong to 3 above message', () => {
    expect(errorCode('E04')).toBe('Something went wrong');
  });

  test('Should return Invalid username or password', () => {
    expect(errorCode('E01')).toBe('Invalid username or password');
  });

  test('Should return Missing data', () => {
    expect(errorCode('E02')).toBe('Missing data');
  });

  test('Should return Too many attempts', () => {
    expect(errorCode('E03')).toBe('Too many attempts');
  });

  test('Should return undefined if message is not a string', () => {
    expect(errorCode(123)).toBe(undefined);
    expect(errorCode({})).toBe(undefined);
    expect(errorCode([])).toBe(undefined);
    expect(errorCode(true)).toBe(undefined);
    expect(errorCode()).toBe(undefined);
  });
});
