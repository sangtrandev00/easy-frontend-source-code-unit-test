// findIndex version 2

function findIndexV2(arrList, callBackFn) {
  if (!Array.isArray(arrList)) {
    return -1;
  }

  for (let i = 0; i < arrList.length; i++) {
    if (callBackFn(arrList[i])) {
      return i;
    }
  }

  return -1;
}

function callBackFn(number) {
  return number % 2 === 0;
}

console.log(findIndexV2([1, 2, 3, 4], callBackFn));
console.log(findIndexV2([1, 2, 3, 4], (number) => number % 3 == 0));
console.log(findIndexV2([1, 2, 3, 4], (number) => number > 3 == 0));
console.log(findIndexV2([1, 2, 3, 4], (number) => number == 100));
