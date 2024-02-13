const checkPostiveEven = require('../Section005/05-08-main-practice');

describe('checkPostiveEven --', () => {
  test('should return false if n is not a numbere', () => {
    expect(checkPostiveEven({})).toBe(false);
    expect(checkPostiveEven([])).toBe(false);
    expect(checkPostiveEven('January')).toBe(false);
    expect(checkPostiveEven(undefined)).toBe(false);
    expect(checkPostiveEven(false)).toBe(false);
  });

  test('Should return true if n is a positive even number', () => {
    expect(checkPostiveEven(1)).toBe(false);
    expect(checkPostiveEven(2)).toBe(true);
  });
});
