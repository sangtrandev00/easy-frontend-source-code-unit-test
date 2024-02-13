function findSumPair(numberList, targetSum) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }

  const mainArr = [];
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        mainArr.push(numberList[i]);
        mainArr.push(numberList[j]);
        return mainArr.sort((a, b) => a - b);
      }
    }
  }
  return [];
}

console.log(findSumPair([3, 2, 1, 4], 3));
console.log(findSumPair([1, 2], 2));
console.log(findSumPair([3, 2, 1], 5));
console.log(findSumPair([3, 3, 2, 1], 6));
