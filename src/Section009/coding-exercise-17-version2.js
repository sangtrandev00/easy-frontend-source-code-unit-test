// Using loop from 2 to n - 1
function isPrimeV1(n) {
  // your code here

  if (n <= 1 || Math.floor(n) !== n) {
    // 3.5 => floor(3.5): 3 != 3.5
    return false;
  }
  let check = 1;
  for (let i = 2; i <= n - 1; i++) {
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

// Using loop from 2 to square root of n
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

console.log('version 1');
console.log(isPrimeV1(1)); // false
console.log(isPrimeV1(2)); // true
console.log(isPrimeV1(3)); // true
console.log(isPrimeV1(4)); // false
console.log(isPrimeV1(5)); // true
console.log('version 2');
console.log(isPrimeV2(1)); // false
console.log(isPrimeV2(2)); // true
console.log(isPrimeV2(3)); // true
console.log(isPrimeV2(4)); // false
console.log(isPrimeV2(5)); // true
console.log(isPrimeV2(11)); // true
console.log(isPrimeV2(13)); // true
console.log(isPrimeV2(10)); //false
