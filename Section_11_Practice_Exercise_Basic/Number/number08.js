export function isDivisibleBy10(n) {
  if (n <= 18 || n > 1000000) {
    return false;
  }

  const newArr = n.toString().split('');
  let sumNumber = 0;
  for (let i = 0; i < newArr.length; i++) {
    sumNumber += Number(newArr[i]);
  }

  if (sumNumber % 10 === 0) {
    return true;
  }

  return false;
}

export function isDivisibleBy10V2(n) {
  if (n <= 18 || n > 1000000) {
    return false;
  }

  const newArr = n.toString().split('');
  let sumNumber = 0;

  newArr.forEach((number) => {
    sumNumber += Number(number);
  });

  return sumNumber % 10 === 0 ? true : false;
}

export function isDivisibleBy10V3(n) {
  if (n <= 18 || n > 1000000) {
    return false;
  }

  const newArr = n.toString().split('');

  const sumNumber = newArr.reduce((prev, number) => {
    return Number(prev) + Number(number);
  }, 0);

  return sumNumber % 10 === 0 ? true : false;
}
