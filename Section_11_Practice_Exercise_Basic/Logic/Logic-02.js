export function findMissingNumber(numberList, n) {
  if (numberList[0] < 5 || numberList[numberList.length - 1] > n || numberList[0] > n) {
    return undefined;
  }
  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] === numberList[i + 1]) {
      return undefined;
    }
  }

  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i + 1] - numberList[i] >= 3) {
      return undefined;
    }
  }

  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  let newArr = range(5, n, 1);
  for (let i = 0; i <= n; i++) {
    if (newArr[i] !== numberList[i]) {
      return newArr[i];
    }
  }

  return undefined;
}
//                            [5, 6, 7, 8, 9, 10];
// console.log(findMissingNumber([5, 6, 8, 9, 10], 10));
// console.log(findMissingNumber([5, 6, 10], 10));
// console.log(findMissingNumber([5, 8, 11], 11));
