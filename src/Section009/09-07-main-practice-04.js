function findLastElementIndex(searchValue, arrList) {
  if (!Array.isArray(arrList)) {
    return `${arrList} is not an array`;
  }

  for (let i = arrList.length - 1; i >= 0; i--) {
    if (arrList[i] === searchValue) {
      return i;
    }
  }
  return -1;
}

console.log(findLastElementIndex(1, [1, 1, 1, 1, 1, 1]));
console.log(findLastElementIndex(7, [7, 7, 7, 77, 7]));
console.log(findLastElementIndex(4, [1, 3, 5, 6, 7]));
console.log(findLastElementIndex(6, [6, 6, 5, 6, 7]));
console.log(findLastElementIndex(3, [1, 3, 3, 0, 7]));
