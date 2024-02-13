// findIndex version 2

function findIndexV2(arrList, callBackFn) {
  if (!Array.isArray(arrList)) {
    return undefined;
  }

  for (let i = 0; i < arrList.length; i) {
    if (callBackFn(arrList[i], i)) {
      return i;
    }
  }

  return -1;
}

function callBackFn(number) {
  return number % 2 === 0;
}

console.log(findIndexV2([1, 2, 3, 4], callBackFn));

console.log('hello viet nam');
