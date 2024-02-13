//filter (arr, callbackFn)

// callbackFn return true

function filterV2(arr, callBackFn) {
  if (!Array.isArray(arr) || typeof callBackFn !== 'function') {
    return undefined;
  }
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBackFn(arr[i], i)) {
      let element = arr[i];
      newArr.push(element);
    }
  }

  return newArr;
}

function callBackFn(element) {
  return element > 2;
}

// callBackFn always return true/ false. Because this is condition.

console.log(filterV2([1, 2, 3, 4, 5], callBackFn)); // expect 3 , 4, 5
console.log(filterV2([1, 2, 3, 4, 5], (element) => element === 3)); // expect 3
console.log(filterV2([1, 2, 3, 4, 5], (element) => element < 3)); // expect 1 ,2
console.log(filterV2([1, 2, 3, 4, 5], (element) => element < 3)); // expect 1 ,2

console.log(
  filterV2([2, 2, 4, 4, 5], (number, index) => {
    return (number % 2 === 0 && index % 2 !== 0) || (number % 2 !== 0 && index % 2 == 0);
  })
); // expect 5, 2, 2, 5
