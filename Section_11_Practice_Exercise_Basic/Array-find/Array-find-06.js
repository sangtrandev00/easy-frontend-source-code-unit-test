function isSquareNumber(number) {
  if (Math.floor(number) !== number) {
    return false;
  }

  if (number < 3) {
    return false;
  }

  if (Math.sqrt(number) === Math.floor(Math.sqrt(number))) {
    return true;
  }
  return false;
}

export function findLastPerfectSquare(numberList) {
  if (numberList.length === 0) {
    return undefined;
  }

  const newArr = numberList.filter((number) => isSquareNumber(number));
  return newArr.length > 0 ? newArr[newArr.length - 1] : undefined;
}
