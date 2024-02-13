export function countNumbers(numberList) {
  let count = 0;
  numberList.forEach((num, index, arr) => {
    if (arr[index] > arr[index + 1]) {
      count++;
    }
  });

  return count;
}
