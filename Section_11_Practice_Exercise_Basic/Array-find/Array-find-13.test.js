import { findStudent } from './Array-find-13';

describe('findStudent() --', () => {
  test('should return obj final if find match with requirement', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
      { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
      { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
      { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
    ];
    expect(findStudent(studentList)).toEqual({
      id: 3,
      name: 'John',
      marks: { math: 4, english: 7, programming: 9 },
    });
  });

  test('should return undefined if studentList is not have any marks less than 5 || or all student have mark less than 5', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
      { id: 2, name: 'Bob', marks: { math: 6, english: 9, programming: 5 } },
      { id: 3, name: 'John', marks: { math: 6, english: 7, programming: 9 } },
      { id: 4, name: 'Sarah', marks: { math: 9, english: 8, programming: 10 } },
    ];

    const studentList2 = [
      { id: 1, name: 'Alice', marks: { math: 4, english: 4, programming: 1 } },
      { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 3 } },
      { id: 3, name: 'John', marks: { math: 4, english: 2, programming: 1 } },
      { id: 4, name: 'Sarah', marks: { math: 2, english: 1, programming: 1 } },
    ];

    const studentList3 = [
      { id: 1, name: 'Alice', marks: { math: 1, english: 1, programming: 5 } },
      { id: 2, name: 'Bob', marks: { math: 2, english: 2, programming: 5 } },
      { id: 3, name: 'John', marks: { math: 4, english: 4, programming: 9 } },
      { id: 4, name: 'Sarah', marks: { math: 2, english: 2, programming: 10 } },
    ];
    expect(findStudent(studentList)).toEqual(undefined);
    expect(findStudent(studentList2)).toEqual(undefined);
    expect(findStudent(studentList3)).toEqual(undefined);
  });

  test('Should return undefined if para is not valid', () => {
    expect(findStudent([])).toEqual(undefined);
  });
});
