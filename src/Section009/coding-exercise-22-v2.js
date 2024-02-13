'strict mode';

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

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
// function isAllPerfectNumbersV2(numberList) {
//   // your code here

//   if (numberList.length === 0) {
//     return false;
//   }
//   let count = 0;

//   let countPerfectNumber = numberList.reduce((acc, current, index, arr) => {
//     if (isPerfectNumber(current)) {
//       count = count + 1;
//       return count;
//     } else {
//       count = count;
//       return count;
//     }
//   }, 0);

//   if (countPerfectNumber === numberList.length) return true;
//   else return false;
// }

function isAllPerfectNumbersV2(numberList) {
  // your code here
  if (!Array.isArray(numberList)) {
    return false;
  }

  if (numberList.length === 0) {
    return false;
  }
  if (numberList.some((number) => !isPerfectNumber(number))) {
    return false;
  }

  let count = 0;
  const countPerfectNumber = numberList.reduce(
    (prev, current) => (isPerfectNumber(current) ? ++count : count),
    0
  );

  if (countPerfectNumber === numberList.length) return true;
  else return false;
}

console.log(isAllPerfectNumbersV2([])); // false
console.log(isAllPerfectNumbersV2([1])); // false vi 1 khong phai la so hoan hao
console.log(isAllPerfectNumbersV2([1, 2, 3])); // false
console.log(isAllPerfectNumbersV2([6])); // true vi 6 la so hoan hao
console.log(isAllPerfectNumbersV2([6, 28])); // true vi 6 va s8 deu la so hoan hao
