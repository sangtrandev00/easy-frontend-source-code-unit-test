function isPerfectNumber(n) {
  // your code here

  if (n <= 5 || n >= 1000) {
    return undefined;
  }
  const newArr = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      newArr.push(i);
      let j = n / i;
      if (j !== i) newArr.push(j);
    }
  }
  newArr.sort((a, b) => a - b);

  let sumPerfect = 0;
  for (let i = 0; i < newArr.length - 1; i++) {
    sumPerfect += newArr[i];
  }

  if (sumPerfect === n) {
    return true;
  }

  return false;
}

// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
  // your code here

  for (let i = 0; i < numberList.length; i++) {}
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
  // your code here
}
