function sumMinimumdigit(number) {
  let newArr = number.toString().split('');
  newArr = newArr.map((num) => (num = Number(num)));
  return Math.min(...newArr);
}

// console.log(sumMinimumdigit(123));
// console.log(sumMinimumdigit(986));
// console.log(sumMinimumdigit(100));

export function sumAllMinDigits(numberList) {
  if (numberList.length === 0) {
    return 0;
  }

  numberList = numberList.map((num) => (num = sumMinimumdigit(num)));
  return numberList.reduce((acc, num) => acc + num, 0);
}

// console.log(sumAllMinDigits([123, 4]));
// console.log(sumAllMinDigits([5345, 4]));
