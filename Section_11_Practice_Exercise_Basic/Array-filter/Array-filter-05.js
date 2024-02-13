function isEvenPostive(n) {
  if (typeof n !== 'number') {
    return false;
  }

  if (n > 0 && n % 2 === 0) {
    return true;
  }

  return false;
}

export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList)) {
    return [];
  }

  let firstPostiveEven = 0;
  let firstIndexPostiveEven;
  numberList = numberList.filter((number) => number > 0);

  for (var i = 0; i < numberList.length; i++) {
    if (isEvenPostive(numberList[i])) {
      firstPostiveEven = numberList[i];
      firstIndexPostiveEven = i;
      break;
    }
  }

  if (firstPostiveEven === 0) {
    return [];
  }
  const newArr = [];
  for (let i = firstIndexPostiveEven + 1; i < numberList.length; i++) {
    if (numberList[i] === firstPostiveEven) {
      newArr.push(numberList[i]);
    }
  }

  return newArr.length > 0 ? newArr : [];
}

// console.log(findAllNumbers([1, 3, 5]));
// console.log(findAllNumbers([1, 2, 5]));
// console.log(findAllNumbers([1, 4, 5, -6, 4, 5, 4]));
