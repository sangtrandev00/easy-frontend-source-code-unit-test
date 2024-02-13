// console.log(isIncreasingNumberByDistance(456789, 1));

export function findAllDecreasingSubArr(numberList) {
  let count = 0;
  let firstIndex = 0;
  const mainArr = [];
  for (let i = 0; i < numberList.length; i++) {
    count++;
    let newArr = [];
    if (numberList[i] < numberList[i + 1] || numberList[i + 1] === undefined) {
      newArr = numberList.slice(firstIndex, firstIndex + count);
      mainArr.push(newArr);
      firstIndex = i + 1;
      count = 0;
    }
  }

  return mainArr.filter((arr) => arr.length >= 3);
}

console.log(findAllDecreasingSubArr([3, 2, 1, 15, 10, 20]));
console.log(findAllDecreasingSubArr([1, 2, 3, -5, -10, 5, 10, 5, 6, 12, -8, 1]));
