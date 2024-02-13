function calcAvgOfAllEvenNumbers(numberList) {
  // your code here

  if (!Array.isArray(numberList) || numberList.length === 0) {
    return 0;
  }
  let count = 0;
  // const sum = numberList.reduce((acc, number) => {
  //   if (number % 2 === 0) {
  //     count++;
  //     return acc + number;
  //   }
  // }, 0);
  let sum = 0;
  numberList.forEach((number) => {
    if (number % 2 === 0) {
      count++;
      sum += number;
    }
  });

  let avg;
  if (count > 0) {
    avg = sum / count;
  } else {
    avg = 0;
  }

  if (Math.floor(avg) !== avg) {
    return Math.round(avg);
  }

  return avg;
}

console.log(calcAvgOfAllEvenNumbers(1)); // 0
console.log(calcAvgOfAllEvenNumbers([])); // 0
console.log(calcAvgOfAllEvenNumbers([1])); // 0
console.log(calcAvgOfAllEvenNumbers([1, 2])); // 2
console.log(calcAvgOfAllEvenNumbers([1, 2, 4])); // 3
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8])); // 14/3 ===> 5
