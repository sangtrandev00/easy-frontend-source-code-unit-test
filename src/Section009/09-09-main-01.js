// build find function in javascript

function findFirstEven(numberList, callbackFn) {
  if (!Array.isArray(numberList)) {
    return 'your argument is not an array';
  }

  for (let i = 0; i < numberList.length; i++) {
    if (callbackFn(numberList[i], i)) {
      return numberList[i];
    }
  }
  return undefined;
}

function callbackFn(number) {
  return number % 2 === 0;
}

console.log(findFirstEven([1, 5, 3, 4, 5, 6], callbackFn));
console.log(
  findFirstEven([1, 5, 3, 4, 5, 6], function (number) {
    return number % 5 === 0;
  })
);

console.log(findFirstEven([1, 5, 3, 4, 5, 6], (number) => number % 3 === 0));

// console.log(findFirstEven());
// console.log(findFirstEven([1, 2, 3, 4, 5, 6]));
// console.log(findFirstEven([1, 1, 3, 7, 5, 9]));
