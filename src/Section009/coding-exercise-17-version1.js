// haven't finished yet!

// Using loop from 2 to n - 1
export function isPrimeV1(n) {
  // your code here
  if (typeof n !== 'number' || isNaN(n)) {
    return undefined;
  }

  if (n < 2 || Math.floor(n) !== n) {
    return false;
  }

  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Using loop from 2 to square root of n
function isPrimeV2(n) {
  // your code here

  if (typeof n !== 'number' || isNaN(n)) {
    return undefined;
  }

  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % 2 === 0) {
      return false;
    }
  }

  return true;
}

// console.log('version 1');
// console.log(isPrimeV1(1)); // false
// console.log(isPrimeV1(2)); // true
// console.log(isPrimeV1(3)); // true
// console.log(isPrimeV1(4)); // false
// console.log(isPrimeV1(5)); // true
// console.log(isPrimeV1(12.3)); // false
// console.log(isPrimeV1([])); // undefined
// console.log(isPrimeV1({})); // undefined
// console.log(isPrimeV1(true)); // undefined
// console.log(isPrimeV1()); // undefined
// console.log(isPrimeV1('tran')); // undefined
// console.log('version 2');
// console.log(isPrimeV2(1)); // false
// console.log(isPrimeV2(2)); // true
// console.log(isPrimeV2(3)); // true
// console.log(isPrimeV2(4)); // false
// console.log(isPrimeV2(5)); // true
// console.log(isPrimeV2(11)); // true
// console.log(isPrimeV2(13)); // true
// console.log(isPrimeV2(10)); //false
