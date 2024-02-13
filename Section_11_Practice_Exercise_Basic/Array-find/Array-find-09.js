export function findStudentById(studentList, studentId) {
  if (studentList.length === 0) {
    return -1;
  }

  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id === studentId) {
      return i;
    }
  }

  return -1;
}

function findStudentByIdV2(studentList, studentId) {
  if (studentList.length === 0) {
    return -1;
  }

  return studentList.findIndex((student) => student.id === studentId);
}

// const studentList = [
//   { id: 1, name: 'Easy' },
//   { id: 2, name: 'Frontend' },
// ];

// console.log(findStudentById(studentList, 1));
