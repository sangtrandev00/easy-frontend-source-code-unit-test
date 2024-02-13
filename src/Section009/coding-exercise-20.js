// using for...i
function transformNumbersV1(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length === 0) {
    return [];
  }
  if (numberList.length <= 2) return [...numberList].reverse();

  const newArr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (i === 0) {
      newArr.push(numberList[i + 1]);
    } else if (i === numberList.length - 1) {
      newArr.push(numberList[i - 1]);
    } else {
      newArr.push(numberList[i - 1] + numberList[i + 1]);
    }
  }
  return newArr;
}

// using forEach()
function transformNumbersV2(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length === 0) {
    return [];
  }
  if (numberList.length <= 2) return [...numberList].reverse();

  const newArr = [];
  numberList.forEach((number, index, array) => {
    if (index === 0) {
      newArr.push(array[index + 1]);
    } else if (index === numberList.length - 1) {
      newArr.push(array[index - 1]);
    } else {
      newArr.push(array[index - 1] + array[index + 1]);
    }
  });
  return newArr;
}

// using map()
function transformNumbersV3(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length === 0) {
    return [];
  }
  if (numberList.length <= 2) return [...numberList].reverse();

  const newArr = [];

  return numberList.map((number, index, array) => {
    if (index === 0) {
      //newArr.push(array[index + 1]);
      return array[index + 1];
    } else if (index === numberList.length - 1) {
      //newArr.push(array[index - 1]);
      return array[index - 1];
    } else {
      //newArr.push(array[index + 1] + array[index - 1]);
      return array[index + 1] + array[index - 1];
    }
  });
}

console.log(transformNumbersV1([]));
console.log(transformNumbersV1([1]));
console.log(transformNumbersV1([5, 10]));
console.log(transformNumbersV1([10, 5]));
console.log(transformNumbersV1([2, 4, 6, 8]));

console.log(transformNumbersV2([]));
console.log(transformNumbersV2([1]));
console.log(transformNumbersV2([5, 10]));
console.log(transformNumbersV2([10, 5]));
console.log(transformNumbersV2([2, 4, 6, 8]));

console.log(transformNumbersV3([]));
console.log(transformNumbersV3([1]));
console.log(transformNumbersV3([5, 10]));
console.log(transformNumbersV3([10, 5]));
console.log(transformNumbersV3([2, 4, 6, 8]));
