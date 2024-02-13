export function statisticsNumbers(numberList) {
  if (numberList.length === 0) {
    return {};
  }

  const obj = {};

  for (let i = 0; i < numberList.length; i++) {
    if (obj[numberList[i]]) {
      obj[numberList[i]] += 1;
    } else {
      obj[numberList[i]] = 1;
    }
  }

  return obj;
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
