export function findLastNegativeOdd(numberList) {
  if (numberList.length === 0) {
    return undefined;
  }
  const newNumberList = [];
  numberList.forEach((number) => {
    if (number % 2 !== 0 && number < 0) {
      newNumberList.push(number);
    }
  });

  return newNumberList.length > 0 ? newNumberList[newNumberList.length - 1] : undefined;
}
