 function findAllPositiveEvenSubArr(numberList) {
  const mainArr = [];

  if (!Array.isArray(numberList)) {
    return [];
  }

  // numberList = numberList.filter((num) => num > 0);
  let newArr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0 && numberList[i] > 0) {
      newArr.push(numberList[i]);
    }
    if (
      newArr.length > 0 &&
      (numberList[i] % 2 !== 0 || i === numberList.length - 1 || numberList[i] < 0)
    ) {
      mainArr.push(newArr);
      newArr = [];
    }
  }

  return mainArr.filter((arr) => arr.length >= 2);
}

console.log(findAllPositiveEvenSubArr([3, 2, 1, 15, 10, 20]));
console.log(findAllPositiveEvenSubArr([1, 2, 3, -5, -10, 5, 10, 5, 6, 12, -8, 1]));
