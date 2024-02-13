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

// use forEach function():
function isAllPerfectNumbersV5(numberList) {
  // your code here

  if (numberList.length === 0) {
    return false;
  }

  let flag = 0;
  numberList.forEach((number) => {
    if (!isPerfectNumber(number)) {
      flag = 1;
    }
  });

  return flag === 1 ? false : true;
}
console.log('version 5: using forEach() function');
console.log(isAllPerfectNumbersV5([])); // false
console.log(isAllPerfectNumbersV5([1])); // false vi 1 khong phai la so hoan hao
console.log(isAllPerfectNumbersV5([1, 2, 3])); // false
console.log(isAllPerfectNumbersV5([6])); // true vi 6 la so hoan hao
console.log(isAllPerfectNumbersV5([6, 28])); // true vi 6 va s8 deu la so hoan hao
