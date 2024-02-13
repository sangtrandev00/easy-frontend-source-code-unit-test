// v1
function classifyStudentV1(mark) {
  if (mark > 8 && mark <= 10) {
    return 'Excelence';
  }
  if (mark > 7 && mark <= 8) {
    return 'Good';
  }
  if (mark > 4 && mark <= 7) {
    return 'Not good';
  }
  if (mark <= 4 && mark >= 0) {
    return 'Bad';
  }
  return 'Your mark is not correct from range 0 to 10';
}

// let mark = 100;
// console.log(classifyStudent(8));

// v2
function classifyStudentV2(mark) {
  let result;
  if (mark > 8 && mark <= 10) {
    result = 'Excelence';
  } else if (mark >= 7) {
    result = 'Good';
  } else if (mark >= 4 && mark <= 6) {
    result = 'Not good';
  } else if (mark >= 0 && mark <= 4) {
    return 'Bad';
  }
}
// }
// console.log(classifyStudent(8));

// version 3. optimize
function classifyStudentV3(mark) {
  // check input argument
  if (mark < 0 || mark > 10) {
    return null;
  }

  // main
  if (mark >= 8) {
    return 'Excelence';
  }
  if (mark >= 7) {
    return 'Good';
  }
  if (mark >= 4) {
    return 'Not good';
  }
  if (mark >= 0) {
    return 'Bad';
  }
}
module.exports = classifyStudentV1;
module.exports = classifyStudentV2;
module.exports = classifyStudentV3;

// console.log(classifyStudent(-1));
