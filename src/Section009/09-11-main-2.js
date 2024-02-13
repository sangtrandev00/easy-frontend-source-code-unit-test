function mapV2(numberList, mappingFn) {
  if (!Array.isArray(numberList) || typeof mappingFn !== 'function') {
    return undefined;
  }

  const newArr = [];

  for (let i = 0; i < numberList.length; i++) {
    const element = mappingFn(numberList[i], i);
    newArr.push(element);
  }
  return newArr;
}

console.log(
  mapV2([2, 3, 4, 5], (number, index) => {
    return index % 2 === 0 ? number * 2 : number + 1;
  })
);

console.log(mapV2([2, 3, 4, 5], (number) => number.toString()));
