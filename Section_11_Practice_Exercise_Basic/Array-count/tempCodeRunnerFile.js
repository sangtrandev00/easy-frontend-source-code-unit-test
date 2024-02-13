function findNumbersV2(numberList) {
  const unquieNumberList = [];

  numberList.forEach((num) => {
    if (unquieNumberList.indexOf(num) === -1) {
      unquieNumberList.push(num);
    }
  });

  return unquieNumberList;
}

console.log(findNumbersV2([1,1,2,2,3,4,5,6,5,7,5]));