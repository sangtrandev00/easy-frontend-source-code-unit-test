function binarySearch(studentList, searchName) {
  // your code here

  //   if (!Array.isArray(studentList) || studentList.length === 0) {
  //     return -1;
  //   }

  //   if (searchName.length === 0 || searchName.includes(' ')) {
  //     return -1;
  //   }

  //   if (!studentList && !searchName) {
  //     return -1;
  //   }

  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    !searchName ||
    searchName.trim() == ''
  ) {
    return -1;
  }

  searchName = searchName.toLowerCase().trim();
  let left = 0;
  let right = studentList.length - 1;
  return binarySearchRecursive(studentList, searchName, left, right);
}

function binarySearchRecursive(studentList, searchName, left, right) {
  if (right < left) {
    return -1;
  }

  const mid = left + Math.trunc((right - left) / 2);
  let studentListNameMid = studentList[mid].name.toLowerCase().trim();

  if (studentListNameMid === searchName) {
    return mid;
  }

  if (searchName > studentListNameMid) {
    return binarySearchRecursive(studentList, searchName, mid + 1, right);
  }

  if (searchName < studentListNameMid) {
    return binarySearchRecursive(studentList, searchName, left, mid - 1);
  }
}
const studentList = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'John' },
];

// console.log(binarySearch(studentList, 'Bob'));
console.log(binarySearch(studentList, 'john'));
console.log(binarySearch(studentList, 'alice     '));
