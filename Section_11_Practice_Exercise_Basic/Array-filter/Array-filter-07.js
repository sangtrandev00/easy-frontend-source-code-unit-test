export function findAllStudents(studentList) {
  if (studentList.length === 0) {
    return undefined;
  }

  const newArr = [];

  studentList.forEach((student) => {
    if (student.math < 5) {
      newArr.push(student);
    }
  });

  return newArr.length > 0 ? newArr : undefined;
}

export function findAllStudentsV2(studentList) {
  if (studentList.length === 0) {
    return undefined;
  }

  const newArr = studentList.filter((student) => student.math < 5);

  return newArr.length > 0 ? newArr : undefined;
}
