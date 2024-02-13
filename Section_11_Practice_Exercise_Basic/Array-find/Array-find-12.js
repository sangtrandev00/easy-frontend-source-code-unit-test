export function findLastStudentHavingMinAvg(studentList) {
  if (studentList.length === 0) {
    return undefined;
  }

  // const newArrList = [];
  // let minAvg = (studentList[0].math + studentList[0].english) / 2;
  // for (let i = 1; i < studentList.length; i++) {
  //   eachAvgMark = studentList[i].math + studentList[i].english;
  //   if (minAvg >= eachAvgMark) {
  //     minAvg = eachAvgMark;
  //     newArrList.push(studentList[i]);
  //   }
  // }

  const studentListAvgMark = studentList.map((student) => (student.math + student.english) / 2);
  const newArr = [];
  const minAvg = Math.min(...studentListAvgMark);
  studentList.forEach((student) => {
    let avg = (student.math + student.english) / 2;
    if (avg === minAvg) {
      newArr.push(student);
    }
  });

  return newArr.length > 0 ? newArr[newArr.length - 1] : undefined;
}

const studentList = [
  { id: 1, name: 'Alice', math: 9, english: 9 },
  { id: 2, name: 'Bob', math: 5, english: 5 },
  { id: 3, name: 'John', math: 5, english: 5 },
];

// console.log(findLastStudentHavingMinAvg(studentList));
