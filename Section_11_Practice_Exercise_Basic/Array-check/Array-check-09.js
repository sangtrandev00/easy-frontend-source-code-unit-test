export function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList)) {
    return false;
  }

  if (numberList.length <= 2) {
    return false;
  }

  for (var i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] >= numberList[i + 1]) {
      return false;
    }
  }
  return true;
}

export function isIncreasingNumberListV2(numberList) {
  if (!Array.isArray(numberList)) {
    return false;
  }

  if (numberList.length === 0) {
    return false;
  }

  return numberList.every((number, index, arr) => {
    return arr[index] <= arr[index + 1];
  });
}
