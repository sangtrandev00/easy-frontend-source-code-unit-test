import { countStudents } from './Array-count-06';

describe('countStudents() --', () => {
  test('Should return numerous of object if avg mark > avg parameter', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 8 } },
      { id: 2, name: 'Bob', marks: { math: 9 } },
    ];

    expect(countStudents(studentList, 7)).toBe(2);
  });
  test('Should return numerous of object if avg mark > avg parameter', () => {
    const studentList2 = [
      { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
      { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
    ];
    expect(countStudents(studentList2, 7)).toBe(1);
  });
});
