import { hasAlice } from './Array-check-07';

describe('hasAlice() --', () => {
  test('should return false if arr is not an arry', () => {
    expect(hasAlice('string')).toBe(false);
    expect(hasAlice(true)).toBe(false);
    expect(hasAlice(123)).toBe(false);
    expect(hasAlice({})).toBe(false);
  });

  test('should return false if an arr does not have  any female and and name is Aleice', () => {
    expect(
      hasAlice([
        [
          { id: 1, name: 'alice', gender: 'male' },
          { id: 2, name: 'alex', gender: 'female' },
          { id: 3, name: 'Easy Frontend', gender: 'male' },
        ],
      ])
    ).toBe(false);
  });

  test('should return true the condition is fullfiled', () => {
    expect(
      hasAlice([
        { id: 1, name: 'Alice', gender: 'male' },
        { id: 2, name: 'aliCE', gender: 'female' },
        { id: 3, name: 'Easy Frontend', gender: 'male' },
      ])
    ).toBe(true);
  });
});
