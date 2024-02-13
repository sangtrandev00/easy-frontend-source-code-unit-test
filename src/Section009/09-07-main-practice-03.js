function checkFirstIndex(searchValue, arrList) {
  if (!Array.isArray(arrList)) {
    return `${arrList} is not an array`;
  }

  for (let i = 0; i < arrList.length; i++) {
    if (arrList[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

console.log(checkFirstIndex(1, [1, 3, 5, 6, 7]));
console.log(checkFirstIndex(7, [1, 3, 5, 6, 7]));
console.log(checkFirstIndex(4, [1, 3, 5, 6, 7]));
console.log(checkFirstIndex(6, [1, 3, 5, 6, 7]));
console.log(checkFirstIndex(3, [1, 3, 5, 6, 7]));
