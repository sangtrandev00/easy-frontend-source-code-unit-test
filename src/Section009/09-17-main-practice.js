// write function to find max.
// for ... i
// for ... each
// reduce
// for of

function findMaxV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let max = numberList[0];
  for (let i = 1; i < numberList.length; i++) {
    if (max < numberList[i]) {
      max = numberList[i];
    }
  }

  return max;
}

console.log(findMaxV1([1, 2, 3, 4, 5, 6, 7, 9, 10]));
console.log(findMaxV1([1, 2, 3, 88, 5, 11, 7, 9, 10]));

// version 2

function findMaxV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let max = numberList[0];
  numberList.forEach((element) => {
    if (max < element) {
      max = element;
    }
  });

  return max;
}

function findMaxV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let max = numberList[0];
  numberList.forEach((element) => (max < element ? (max = element) : max));

  return max;
}
console.log(findMaxV2([1, 2, 3, 4, 6]));
console.log(findMaxV2([1, 22, 12, 4, 6]));

//version 3.0

function findMaxV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const maxArr = numberList.reduce((max, value) => {
    return max > value ? max : value;
  });

  return maxArr;
}

console.log(findMaxV3([1, 2, 3, 4, 6]));
console.log(findMaxV3([1, 2, 12, 4, 6]));
