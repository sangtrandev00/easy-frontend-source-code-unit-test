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

//  some
function hasPrimeV5(numberList) {
  // your code here
  if (!Array.isArray(numberList)) {
    return undefined;
  }

  return numberList.some((number) => isPrimeV2(number));
}

console.log('version 5');
console.log(hasPrimeV5([1, 2, 3, 4, 5, 6])); // expect true
console.log(hasPrimeV5([4, 4, 6, 8, 10])); // expect false
console.log(hasPrimeV5([0, 0, 0, 0, 0, 6])); // expect false
