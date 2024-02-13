export function countStudents(studentList, avgMark) {
  let avg;

  studentList.forEach((student) => {
    let markArr = Object.values(student.marks);
    avg = markArr.reduce((prev, cur) => prev + cur, 0) / markArr.length;
    student.marks['avg'] = avg;
  });
  let count = 0;
  studentList.forEach((student) => {
    if (student.marks.avg > avgMark) {
      count++;
    }
  });

  return count;
}

// console.log(
//   countStudents(
//     [
//       { id: 1, name: 'Alice', marks: { math: 8 } },
//       { id: 2, name: 'Bob', marks: { math: 9 } },
//     ],
//     7
//   )
// );

// console.log(
//   countStudents(
//     [
//       { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
//       { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
//     ],
//     7
//   )
// );
