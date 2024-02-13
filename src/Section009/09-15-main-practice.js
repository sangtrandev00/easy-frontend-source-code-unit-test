// build reduce function

// reduce(arr, callbackFn, initalValue)

//version 1: has initial Value.
function reduceVersion2(arr, callbackFn, initalValue) {
  let sum = initalValue;
  for (let i = 0; i < arr.length; i++) {
    sum = callbackFn(sum, arr[i], i);
  }

  return sum;
}

function callbackFn(sum, value) {
  return value + sum;
}

console.log(reduceVersion2([2, 4, 6], callbackFn, 0)); // expect 12.
console.log(reduceVersion2([2, 4, 6], callbackFn, 10)); // expect 22.
console.log(reduceVersion2([2, 4, 6], callbackFn, 12)); // expect 24.

//Version 2: don't have initial value;
function reduceVersion2(arr, callbackFn) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = callbackFn(sum, arr[i], i);
  }

  return sum;
}

function callbackFn(sum, value) {
  return value + sum;
}

console.log(reduceVersion2([2, 4, 6], callbackFn)); // expect 12.
console.log(reduceVersion2([3, 5, 7], callbackFn)); // expect 15.
console.log([].reduce((sum, value) => sum + value, 10)); // expect 15.

// version final

function reduceVersionFinal(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    return undefined;
  }

  if (arr.length === 0 && initialValue === undefined) {
    throw new Error('Invalid parameters');
  }

  if (arr.length === 0 && initialValue !== undefined) {
    return initialValue;
  }

  let accumulator;
  let i;

  if (initialValue === undefined) {
    accumulator = arr[0];
    i = 1;
  } else {
    accumulator = initialValue;
    i = 0;
  }

  for (; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i); // this logic is so complicated!
  }

  return accumulator;
}

function callbackFn(accumulator, value) {
  return accumulator + value;
}

console.log(reduceVersionFinal([2, 3, 4, 5, 6], (multiply, value) => multiply * value)); // expect 720
console.log(reduceVersionFinal([2, 3, 4, 5, 6], (multiply, value) => multiply * value, 1)); // expect 720

console.log(reduceVersionFinal([2, 4, 6, 7], callbackFn, 0));
console.log(reduceVersionFinal([2, 4, 6, 7], callbackFn, 2));
console.log(reduceVersionFinal([3, 6, 8, 9], callbackFn));

console.log(reduceVersionFinal([], callbackFn, 10));
console.log(reduceVersionFinal([], 'hello', 10));
console.log(reduceVersionFinal('ok', callbackFn, 10));
console.log(reduceVersionFinal([], callbackFn));
