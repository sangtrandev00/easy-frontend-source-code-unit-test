export function hasOddNumberDivisibleBy3(numberList) {
  if (numberList.length === 0) {
    return false;
  }
  let count = 0;
  numberList.forEach((number) => {
    if (number % 2 !== 0 && number % 3 === 0) {
      count++;
    }
  });

  return count === 0 ? false : true;
}

export function hasOddNumberDivisibleBy3V2(numberList) {
  if (numberList.length === 0) {
    return false;
  }

  return numberList.filter((number) => number % 2 !== 0 && number % 3 === 0).length > 0
    ? true
    : false;
}
