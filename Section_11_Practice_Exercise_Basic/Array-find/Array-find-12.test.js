import { findLastStudentHavingMinAvg } from './Array-find-12';

describe('findLastStudentHavingMinAvg() --', () => {
  test('should return obj final if find match with requirement', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9, english: 9 },
      { id: 2, name: 'Bob', math: 5, english: 5 },
      { id: 3, name: 'John', math: 5, english: 5 },
    ];
    expect(findLastStudentHavingMinAvg(studentList)).toEqual({
      id: 3,
      name: 'John',
      math: 5,
      english: 5,
    });
  });

  test('Should return undefined if para is not valid', () => {
    expect(findLastStudentHavingMinAvg([])).toEqual(undefined);
  });
});
