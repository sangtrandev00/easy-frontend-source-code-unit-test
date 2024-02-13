function isMarkValid(markList) {
  let count = 0;
  markList.forEach((mark) => {
    if (mark < 5) {
      count += 1;
    }
  });

  return count === 1 ? true : false;
}

// console.log(isMarkValid([1, 7, 9]));
// console.log(isMarkValid([1, 2, 9]));
// console.log(isMarkValid([1, 2, 3]));
// console.log(isMarkValid([8, 7, 9]));
// console.log(isMarkValid([5, 5, 5]));

export function findStudent(studentList) {
  if (studentList.length === 0) {
    return undefined;
  }

  for (let i = 0; i < studentList.length; i++) {
    const arrMarks = Object.values(studentList[i].marks);
    if (isMarkValid(arrMarks)) {
      return studentList[i];
    }
  }

  return undefined;
}
