export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList)) {
    return false;
  }

  if (studentList.length === 0) {
    return false;
  }
  let count = 0;
  studentList.forEach((student) => {
    if (student.id === studentId) {
      count++;
    }
  });

  return count >= 1 ? true : false;
}

export function hasStudentV2(studentList, studentId) {
  if (!Array.isArray(studentList)) {
    return false;
  }

  if (studentList.length === 0) {
    return false;
  }

  return studentList.filter((student) => student.id === studentId).length >= 1 ? true : false;
}

// export function hasStudentV3(studentList, studentId) {
//   if (!Array.isArray(studentList)) {
//     return false;
//   }

//   return false;
// }
