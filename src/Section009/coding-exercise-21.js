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

//  for...i

function hasPrimeV1(numberList) {
  // your code here
  if (!Array.isArray(numberList)) {
    return undefined;
  }

  for (let i = 0; i < numberList.length; i++) {
    if (isPrimeV2(numberList[i])) {
      return true;
    }
  }
  return false;
}
console.log('version 1');
console.log(hasPrimeV1([1, 2, 3, 4, 5, 6])); // expect true
console.log(hasPrimeV1([4, 4, 6, 8, 10])); // expect false
