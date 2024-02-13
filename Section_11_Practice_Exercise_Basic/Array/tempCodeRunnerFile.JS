function isNumberStartWithOddNumber(n) {
  if (n.toString().length === 1 && n % 2 !== 0) {
    return n;
  }

  const arr = n.toString().split('');
  if (arr[0] % 2 !== 0) {
    return n;
  }

  return undefined;
}

console.log(isNumberStartWithOddNumber(123));
console.log(isNumberStartWithOddNumber(1));
console.log(isNumberStartWithOddNumber(2));

function findAllNumbers(numberList) {
  if (!Array.isArray(numberList)) {
    return [];
  }

  const newNumberList = [];

  newNumberList.forEach((num) => {
    if (isNumberStartWithOddNumber(num) === num) {
      newNumberList.push(num);
    }
  });

  return newNumberList.length > 0 ? newNumberList : [];
}

// sai cho nao nhi ?

console.log(findAllNumbers([1, 4, 5]));
console.log(findAllNumbers([234, 421, 125]));
console.log(findAllNumbers([2, 4, 6]));
