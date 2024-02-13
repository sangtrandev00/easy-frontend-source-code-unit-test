function sumDigits(num) {
  const arrNums = num.toString().split('');
  return arrNums.reduce((prev, cur) => Number(prev) + Number(cur), 0);
}

export function sumAllDigits(numberList) {
  if (numberList.length === 0) {
    return 0;
  }
  numberList = numberList.map((num) => sumDigits(num));
  return numberList.reduce((prev, cur) => prev + cur, 0);
}

// sole.log(sumAllDigits([123, 4]));
// console.log(sumAllDigits([123, 4, 5]));
// console.log(sumAllDigits([123, 4, 5, 2]));
// console.log(sumAllDigits([]));
// console.log(sumAllDigits([4]));
