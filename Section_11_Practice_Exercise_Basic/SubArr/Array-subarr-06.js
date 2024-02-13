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

export function findMaxSumArray(numberList) {
  if (numberList.length === 0) {
    return [];
  }

  let groupArrList = findAllIncreasingSubArr(numberList);

  let groupMaxList = groupArrList.map((groupArr) => groupArr.reduce((acc, arr) => acc + arr));
  const max = Math.max(...groupMaxList);
  for (let i = 0; i < groupMaxList.length; i++) {
    if (max === groupMaxList[i]) {
      return groupArrList[i];
    }
  }
}
