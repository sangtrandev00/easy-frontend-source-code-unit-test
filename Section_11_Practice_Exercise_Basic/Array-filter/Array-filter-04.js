function isPrimeV1(n) {
  // your code here
  if (typeof n !== 'number' || isNaN(n)) {
    return [];
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

export function generatePrimeNumbers(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    return [];
  }
  const newArr = [];
  for (let i = 0; i < n; i++) {
    if (isPrimeV1(i)) {
      newArr.push(i);
    }
  }

  return newArr;
}

// console.log(generatePrimeNumbers(10));
// console.log(generatePrimeNumbers(5));
