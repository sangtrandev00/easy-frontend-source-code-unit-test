function findMostFrequentNumberV2(numberList) {
  if (numberList.length === 0) {
    return undefined;
  }

  if (numberList.length === 1) {
    return numberList[0];
  }

  const objStatistics = {};

  for (let i = 0; i < numberList.length; i++) {
    if (objStatistics[numberList[i]]) {
      objStatistics[numberList[i]] += 1;
    } else {
      objStatistics[numberList[i]] = 1;
    }
  }
  let maxKey = undefined;
  for (const key in objStatistics) {
    if (maxKey === undefined || objStatistics[key] > objStatistics[maxKey]) {
      maxKey = key;
    }
  }
  return Number.parseInt(maxKey);
}

console.log(findMostFrequentNumberV2([]));
console.log(findMostFrequentNumberV2([1]));
console.log(findMostFrequentNumberV2([1, 2]));
console.log(findMostFrequentNumberV2([1, 2, 3, 2]));
console.log(findMostFrequentNumberV2([1, 2, 2, 3, 3, 2, 3, 4]));
console.log(findMostFrequentNumberV2([1, 3, 2, 3, 3, 2, 3, 4]));
