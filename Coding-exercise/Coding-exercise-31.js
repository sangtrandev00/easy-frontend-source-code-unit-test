function countStudents(studentList) {
  // your code here

  if (studentList.length === 0 || !Array.isArray(studentList)) {
    return 0;
  }

  studentList = studentList.filter((student) => student.gender === 'male');
  return studentList.length;
}

studentList = [
  { id: 1, gender: 'male' },
  { id: 2, gender: 'female' },
];

console.log(countStudents(studentList));
