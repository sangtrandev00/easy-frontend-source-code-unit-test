const checkIfAllEven = require('../Section009/09-07-main-practice-01');

describe('checkIfAllEven -- ', () => {
  test('should return true if array has one or has some even number', () => {
    expect(checkIfAllEven([1, 2, 3, 4])).toBe(false);
    expect(checkIfAllEven([2, 3])).toBe(false);
  });

  test('should return false when array is empty', () => {
    expect(checkIfAllEven([])).toBe(false);
  });

  test('shoulld return false when not array', () => {
    expect(checkIfAllEven(123)).toBe(false);
    expect(checkIfAllEven('')).toBe(false);
    expect(checkIfAllEven({})).toBe(false);
    expect(checkIfAllEven(undefined)).toBe(false);
    expect(checkIfAllEven(null)).toBe(false);
  });

  test('should return true when array has all even', () => {
    expect(checkIfAllEven([6, 2, 8, 4])).toBe(true);
  });
});
