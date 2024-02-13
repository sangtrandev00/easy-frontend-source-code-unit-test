function findAllIncreasingSubArr(numberList) {
  let count = 0;
  let firstIndex = 0;
  const mainArr = [];
  for (let i = 0; i < numberList.length; i++) {
    count++;
    let newArr = [];
    if (numberList[i] > numberList[i + 1] || numberList[i + 1] === undefined) {
      newArr = numberList.slice(firstIndex, firstIndex + count);
      mainArr.push(newArr);
      firstIndex = i + 1;
      count = 0;
    }
  }

  return mainArr.filter((arr) => arr.length >= 2);
}

// console.log(findAllIncreasingSubArr([1, 2, 3, 0, 10, 20]));

export function findMaxSumArray(numberList) {
  if (numberList.length === 0) {
    return 0;
  }

  let newArr = findAllIncreasingSubArr(numberList);
  newArr = newArr.map((groupArr) => groupArr.reduce((prev, curr) => prev + curr));
  return Math.max(...newArr);
}

// console.log(findMaxSumArray([]));
// console.log(findMaxSumArray([1, 2, 3]));
// console.log(findMaxSumArray([1, 2, 3, 0, 10, 20]));
