function checkIfHasAnElement(value, arrList) {
  if (!Array.isArray(arrList)) {
    return `${arrList} is not an array`;
  }

  for (let i = arrList.length - 1; i >= 0; i--) {
    if (arrList[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(checkIfHasAnElement(1, [1, 3, 4, 5]));
console.log(checkIfHasAnElement(1, [0, 3, 4, 5]));
