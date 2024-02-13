import { hasStudent } from './Array-check-06';

describe('hasStudent() --', () => {
  test('should return false if studentList is not an array', () => {
    expect(hasStudent('string', 1)).toBe(false);
    expect(hasStudent(undefined, 1)).toBe(false);
    expect(hasStudent({}, 1)).toBe(false);
    expect(hasStudent(true, 1)).toBe(false);
    expect(hasStudent(123, 1)).toBe(false);
  });

  test('should return false if an arr does not have any object have a key match with studentId ', () => {
    expect(
      hasStudent(
        [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        3
      )
    ).toBe(false);
  });

  test('should return true if arr contains at least a falsy value', () => {
    expect(
      hasStudent(
        [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        1
      )
    ).toBe(true);
  });
});
