function binarySeach(numberList, number) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  numberList.sort((a, b) => a - b);

  let leftIdx = 0;
  let rightIdx = numberList.length - 1;
  let midIdx;
  while (leftIdx <= rightIdx) {
    midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (rightIdx < leftIdx) {
      return -1;
    }

    if (numberList[midIdx] === number) {
      return midIdx;
    }

    if (numberList[midIdx] > number) {
      rightIdx = midIdx - 1;
    }

    if (numberList[midIdx] < number) {
      leftIdx = midIdx + 1;
    }
  }
}

console.log('Vi tri cua 9 trong array la: ', binarySeach([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
console.log('Vi tri cua 1 trong array la: ', binarySeach([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
