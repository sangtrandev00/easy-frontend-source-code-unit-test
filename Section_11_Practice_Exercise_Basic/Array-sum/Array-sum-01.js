export function sumEvenNumbers(numberList) {
  const newArr = [];
  numberList = numberList.filter((num) => num % 2 === 0);

  numberList.forEach((num, index, arr) => {
    if (arr[index] < arr[index + 1]) {
      newArr.push(arr[index + 1]);
    }
  });

  return newArr.length > 0 ? newArr.reduce((prev, curr) => prev + curr, 0) : 0;
}
