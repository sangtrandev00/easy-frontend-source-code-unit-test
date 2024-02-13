function isPrimeV2(n) {
  // your code here

  if (n <= 1 || Math.floor(n) !== n) {
    // 3.5 => floor(3.5): 3 != 3.5
    return false;
  }
  let check = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      check = 0;
      break;
    }
  }

  if (check === 1) {
    return true;
  } else {
    return false;
  }
}

//  forEach
function hasPrimeV2(numberList) {
  // your code here
  if (!Array.isArray(numberList)) {
    return undefined;
  }

  let flag = 0;

  numberList.forEach((number) => {
    if (isPrimeV2(number)) {
      flag = 1;
    }
  });

  return flag === 1 ? true : false;
}

console.log('version 2');
console.log(hasPrimeV2([1, 2, 3, 4, 5, 6])); // expect true
console.log(hasPrimeV2([4, 4, 6, 8, 10])); // expect false
console.log(hasPrimeV2([1, 2, 3, 4, 5, 6])); // expect true
