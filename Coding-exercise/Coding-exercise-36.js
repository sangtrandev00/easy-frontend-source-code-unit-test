function findFirstDuplicate(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] === numberList[i + 1]) {
      return numberList[i];
    }
  }
  return -1;
}

console.log(findFirstDuplicate([1, 2, 2, 1]));
console.log(findFirstDuplicate([]));
console.log(findFirstDuplicate({}));
console.log(findFirstDuplicate([1, 2, 3]));
console.log(findFirstDuplicate([1, 3, 2, 2, 3, 3, 4]));
