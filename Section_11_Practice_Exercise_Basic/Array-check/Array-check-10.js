export function isDescreasingNumberList(numberList) {
  if (!Array.isArray(numberList)) {
    return false;
  }

  if (numberList.length <= 2) {
    return false;
  }

  let check = numberList.some((number, index, arr) => arr[index] <= arr[index + 1]);

  return !check ? true : false;
}
