export function removeDuplicatedNumbers(numberList) {
  if (numberList.length === 0) {
    return [];
  }

  numberList.sort((a, b) => a - b);
  const newArr = [...numberList];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === numberList[i + 1]) {
      newArr.splice(0, 1);
      continue;
    }
    if (numberList[i] !== numberList[i + 1] && numberList[i] === numberList[i - 1]) {
      newArr.splice(0, 1);
    }
  }

  return newArr;
}

console.log(removeDuplicatedNumbers([1, 1, 1, 2, 3, 2]));
console.log(removeDuplicatedNumbers([1, 2, 3]));
console.log(removeDuplicatedNumbers([1, 1, 3, 2, 2, 3, 4, 6, 5, 5, 6, 4]));
console.log(removeDuplicatedNumbers([1, 1, 2, 2, 3, 3, 4, 5, 6]));
