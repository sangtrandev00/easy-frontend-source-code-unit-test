import { findStudentById } from './Array-find-09';

describe('findStudentById() --', () => {
  test('should return index of array items in array', () => {
    const studentList = [
      { id: 1, name: 'Easy' },
      { id: 2, name: 'Frontend' },
    ];
    expect(findStudentById(studentList, 1)).toBe(0);
  });

  test('should return undefined if para is unvalid', () => {
    const studentList = [
      { id: 1, name: 'Easy' },
      { id: 2, name: 'Frontend' },
    ];

    expect(findStudentById([], 1)).toBe(-1);
    expect(findStudentById(studentList, 3)).toBe(-1);
  });
});
