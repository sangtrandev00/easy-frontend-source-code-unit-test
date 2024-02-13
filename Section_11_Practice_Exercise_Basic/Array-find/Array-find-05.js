export function findSecondLargestNumber(numberList) {
  if (numberList.length <= 1) {
    return undefined;
  }

  const max = Math.max(...numberList);
  const newArr = numberList;
  numberList.forEach((num, index, arr) => {
    if (num === max) {
      newArr.splice(index, 1);
    }
  });

  return Math.max(...newArr);
}

export function findSecondLargestNumberV2(numberList) {
  if (numberList.length <= 1) {
    return undefined;
  }

  const max = Math.max(...numberList);
  const newArr = [];
  numberList.forEach((num, index, arr) => {
    if (num < max) {
      newArr.push(num);
    }
  });

  return Math.max(...newArr);
}

// console.log(findSecondLargestNumberV2([4, 16, 36, 40, 40]));
// console.log(findSecondLargestNumberV2([4, 16, 12,12]));
