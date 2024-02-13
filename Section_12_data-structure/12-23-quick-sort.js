const studentList = [
  {
    id: 1,
    name: 'John',
    marks: { math: 9, english: 10 },
  },
  {
    id: 2,
    name: 'David',
    marks: { math: 10, english: 10 },
  },
  {
    id: 3,
    name: 'Elsa',
    marks: { math: 6, english: 10 },
  },
];

// function sortById(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) {
//     return [];
//   }

//   studentList.sort((s1, s2) => s1.id - s2.id);
//   return studentList;
// }

// console.log('increasing by id: ', sortById(studentList));

// // increasing
// function sortByName(studentList) {
//   if (!Array.isArray(studentList) || studentList.length === 0) {
//     return [];
//   }

//   studentList.sort((s1, s2) => {
//     if (s1.name > s2.name) {
//       return 1;
//     }

//     if (s1.name < s2.name) {
//       return -1;
//     }

//     return 0;
//   });
//   return studentList;
// }

// console.log('sort by Name: ', sortByName(studentList));

// increasing by avg marks

function sortByAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) {
    return [];
  }

  studentList.sort((s1, s2) => {
    avgS1 = (s1.marks.english + s1.marks.math) / 2;
    avgS2 = (s2.marks.english + s2.marks.math) / 2;

    if (avgS1 < avgS2) {
      return -1;
    }
    if (avgS1 > avgS2) {
      return 1;
    }

    return 0;
  });
  return studentList;
}

console.log('sort by avg marks', sortByAvg(studentList));
