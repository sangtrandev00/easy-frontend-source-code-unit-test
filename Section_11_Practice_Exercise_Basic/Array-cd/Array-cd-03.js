export function removeStudentById(studentList, studentId) {
  if (studentList.length === 0) {
    return undefined;
  }

  let indexStudentId;
  if (studentList.every((student) => student.id !== studentId)) {
    return studentList;
  }

  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id === studentId) {
      indexStudentId = i;

      break;
    }
  }
  studentList.splice(indexStudentId, 1);

  return studentList;
  // return studentList;
}

const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
// console.log(studentList.every((student) => student.id !== studentId));

// console.log(removeStudentById(studentList, 1));
// console.log(removeStudentById(studentList, 3));
