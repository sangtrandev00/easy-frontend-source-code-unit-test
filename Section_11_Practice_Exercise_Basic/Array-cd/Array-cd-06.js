export function uniqueArray(numberList) {
  if (!Array.isArray(numberList)) {
    return undefined;
  }

  if (numberList.length <= 1) {
    return [];
  }

  const newArr = [];
  newArr.push(numberList[0]);
  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] < numberList[i + 1]) {
      newArr.push(numberList[i + 1]);
    }
  }

  return newArr;
}
