const getTicketPrice = require('./05-exercise-01.js');

describe('getTicketPrice', () => {
  test('should return your age is invalid', () => {
    expect(getTicketPrice('')).toBe('Your age is invalid');
    expect(getTicketPrice({})).toBe('Your age is invalid');
    expect(getTicketPrice([])).toBe('Your age is invalid');
    expect(getTicketPrice()).toBe('Your age is invalid');
  });

  test('should return your age is invalid', () => {
    expect(getTicketPrice(0)).toBe('Your age is invalid');
    expect(getTicketPrice(121)).toBe('Your age is invalid');
  });

  test('should return 0 if your age from  1 -> 5 or over 70', () => {
    expect(getTicketPrice(1)).toBe(0);
    expect(getTicketPrice(71)).toBe(0);
  });
  test('should return 0 if your age from  6 -> 12 or over 70', () => {
    expect(getTicketPrice(8)).toBe(20000);
    expect(getTicketPrice(6)).toBe(20000);
  });
  test('should return 50000 if your age from  12 -> 70', () => {
    expect(getTicketPrice(58)).toBe(50000);
    expect(getTicketPrice(23)).toBe(50000);
  });
});
