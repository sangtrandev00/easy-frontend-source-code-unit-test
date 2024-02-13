export function findMinPositive(numberList) {
  if (numberList.length === 0) {
    return undefined;
  }

  if (numberList.every((number) => number < 0)) {
    return undefined;
  }
  numberList = numberList.filter((number) => number > 0);

  let min = Math.min(...numberList);

  return min;
}
