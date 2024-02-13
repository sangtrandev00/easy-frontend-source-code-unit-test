import { findStudentHavingHighestMark } from './Array-find-11';

describe('findStudentHavingHighestMark() --', () => {
  test('should return  object if this has largest math mark in array', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 10 },
      { id: 3, name: 'John', math: 10 },
    ];
    expect(findStudentHavingHighestMark(studentList)).toEqual({ id: 2, name: 'Bob', math: 10 });
  });

  test('should return  object if this has largest math mark in array', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 8 },
      { id: 3, name: 'John', math: 10 },
    ];
    expect(findStudentHavingHighestMark(studentList)).toEqual({ id: 3, name: 'John', math: 10 });
  });

  test('Should return undefined if para is not valid', () => {
    expect(findStudentHavingHighestMark([])).toEqual(undefined);
  });
});
