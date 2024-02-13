export function findFirstPositiveEven(numberList) {
  if (numberList.length === 0) {
    return undefined;
  }

  const newNumberList = numberList.filter((number) => number > 0 && number % 2 === 0);
  return newNumberList.length >= 1 ? newNumberList[0] : undefined;
}
