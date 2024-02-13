export function findStudentHavingHighestMark(studentList) {
  if (studentList.length === 0) {
    return undefined;
  }

  const studentMathList = studentList.map((student) => (student = student.math));
  const maxMath = Math.max(...studentMathList);
  // studentList.forEach((student) => {
  //   if (student.math === maxMath) {
  //     return student;
  //   }
  // });
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].math === maxMath) {
      return studentList[i];
    }
  }

  return undefined;
}

const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 8 },
  { id: 3, name: 'John', math: 10 },
];

console.log(findStudentHavingHighestMark(studentList));
