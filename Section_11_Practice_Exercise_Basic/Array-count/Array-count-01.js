export function countPositiveEvenNumbers(numberList) {
  let countEvenPostive = 0;
  numberList.forEach((number) => {
    if (number % 2 === 0 && number > 0) {
      countEvenPostive++;
    }
  });

  return countEvenPostive;
}
