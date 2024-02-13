const printMonth = require('../Section005/05-07-main');

describe('printMonth --', () => {
  test('should return unvalid month if month is not a number || month > 13 || month < 0', () => {
    expect(printMonth({})).toBe('invalid month');
    expect(printMonth([])).toBe('invalid month');
    expect(printMonth('January')).toBe('invalid month');
    expect(printMonth(undefined)).toBe('invalid month');
    expect(printMonth(false)).toBe('invalid month');
    expect(printMonth(13)).toBe('invalid month');
  });

  test('should return 1 2 3 4 5 6 7 8 9 10 11 12 by text when month is the same', () => {
    expect(printMonth(1)).toBe('January');
    expect(printMonth(2)).toBe('Feburary');
    expect(printMonth(3)).toBe('March');
    expect(printMonth(4)).toBe('April');
    expect(printMonth(5)).toBe('May');
    expect(printMonth(6)).toBe('June');
  });
});
