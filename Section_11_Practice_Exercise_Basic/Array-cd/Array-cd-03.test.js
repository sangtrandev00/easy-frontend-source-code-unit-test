import { removeStudentById } from './Array-cd-03';

describe('removeStudentById() --', () => {
  test('should removeStudentById student has id === studentId out of the list', () => {
    const studentList = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    expect(removeStudentById(studentList, 1)).toEqual([{ id: 2, name: 'Bob' }]);
  });

  test('should return studentList if id is out of studentList.id', () => {
    const studentList = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    expect(removeStudentById(studentList, 3)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]);
  });

  test('Should return undefined if para is not valid', () => {
    expect(removeStudentById([])).toEqual(undefined);
  });
});
