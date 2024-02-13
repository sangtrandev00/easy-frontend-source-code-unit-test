export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList)) {
    return false;
  }

  if (numberList.length === 0) {
    return false;
  }

  if (numberList.length === 1) {
    return true;
  }
  let firstIndex = 0;
  let lastIndex = numberList.length - 1;
  for (var i = 0; i < numberList.length; i++) {
    if (firstIndex >= lastIndex) {
      return true;
    }
    if (numberList[firstIndex] === numberList[lastIndex]) {
      firstIndex++;
      lastIndex--;
    }
  }

  return false;
}
