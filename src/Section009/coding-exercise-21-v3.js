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

//  find
function hasPrimeV3(numberList) {
  // your code here

  const firstPrime = numberList.find((number) => isPrimeV2(number));
  return firstPrime ? true : false;
}
console.log('version 3');
console.log(hasPrimeV3([1, 2, 3, 4, 5, 6])); // expect true
console.log(hasPrimeV3([4, 4, 6, 8, 10])); // expect false
console.log(hasPrimeV3([0, 0, 0, 0, 0, 6])); // expect false
