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

//  findIndex
function hasPrimeV4(numberList) {
  // your code here
  if (!Array.isArray(numberList)) {
    return undefined;
  }

  const firstIndexPrime = numberList.findIndex((number) => isPrimeV2(number));
  return firstIndexPrime === -1 ? false : true;
}

console.log('version 4');
console.log(hasPrimeV4([1, 2, 3, 4, 5, 6])); // expect true
console.log(hasPrimeV4([4, 4, 6, 8, 10])); // expect false
console.log(hasPrimeV4([0, 0, 0, 0, 0, 6])); // expect false
