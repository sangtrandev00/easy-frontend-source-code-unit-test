import { findAllStudents, findAllStudentsV2 } from './Array-filter-07';

describe('findAllStudents() --', () => {
  test('should return list of obj final if find match with requirement', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ];
    expect(findAllStudents(studentList)).toEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });

  test('Should return undefined if para is not valid', () => {
    expect(findAllStudents([])).toEqual(undefined);
  });
});

describe('findAllStudentsV2() --', () => {
  test('should return list of obj final if find match with requirement', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ];
    expect(findAllStudentsV2(studentList)).toEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });

  test('Should return undefined if para is not valid', () => {
    expect(findAllStudentsV2([])).toEqual(undefined);
  });
});
