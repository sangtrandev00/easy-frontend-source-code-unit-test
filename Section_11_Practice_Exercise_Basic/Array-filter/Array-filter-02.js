export function findNumbers(numberList) {
  if (!Array.isArray(numberList)) {
    return undefined;
  }

  if (numberList.length <= 1) {
    return [];
  }

  const newArr = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] < numberList[i + 1]) {
      newArr.push(numberList[i + 1]);
    }
  }

  return newArr;
}

// console.log(findNumbers([2, 5, 3, 7]));
// console.log(findNumbers([10, 12, 45, 7]));
