// map(mappingFn)

// map(transformFn)

// map(callbackFn)

function map(numberList, mappingFn) {
  if (!Array.isArray(numberList) || typeof mappingFn !== 'function') {
    return undefined;
  }

  for (let i = 0; i < numberList.length; i++) {
    numberList[i] = mappingFn(numberList[i]);
  }
  return numberList;
}

function mapV2(numberList, mappingFn) {
  if (!Array.isArray(numberList) || typeof mappingFn !== 'function') {
    return undefined;
  }

  const newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    const element = mappingFn(numberList[i]);
    newArr.push(element);
  }
  return newArr;
}

function mappingFn(number) {
  return number * 2;
}

console.log(map([1, 2, 3, 4], mappingFn));
console.log(map([1, 2, 3, 4], (number) => number + 100));
console.log(map([1, 2, 3, 4], (number) => `hello ${number}`));
console.log(map([1, 2, 3, 4], (number) => `hello ${number}`));
console.log(map([], (number) => ++number));
console.log(map(1, (number) => ++number));

console.log(mapV2([1, 2, 3, 4], mappingFn));
console.log(mapV2([1, 2, 3, 4], (number) => number + 100));
console.log(mapV2([1, 2, 3, 4], (number) => `hello ${number}`));
console.log(mapV2([1, 2, 3, 4], (number) => `hello ${number}`));
console.log(mapV2([], (number) => ++number));
console.log(mapV2(1, (number) => ++number));
