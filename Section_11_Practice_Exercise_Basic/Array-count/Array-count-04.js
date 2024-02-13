function findNumbers(numberList) {
  if (!Array.isArray(numberList)) {
    return undefined;
  }

  if (numberList.length <= 1) {
    return [];
  }

  const newArr = [];
  newArr.push(numberList[0]);
  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] < numberList[i + 1]) {
      newArr.push(numberList[i + 1]);
    }
  }

  return newArr;
}

function findNumbersV2(numberList) {
  const unquieNumberList = [];

  numberList.forEach((num) => {
    if (unquieNumberList.indexOf(num) === -1) {
      unquieNumberList.push(num);
    }
  });

  return unquieNumberList;
}

// console.log(findNumbersV2([1,1,2,2,3,4,5,6,5,7,5]));

// console.log(findNumbers([1, 2, 2, 2, 2, 2]));
// console.log(findNumbers([1, 2, 2, 3, 3, 3]));
export function countUniqueNumbers(numberList) {
  if (numberList.length === 0) {
    return 0;
  }

  numberList.sort((a, b) => a - b);
  const newArr = findNumbers(numberList);
  return newArr.length > 0 ? newArr.length : 0;
}

// function countUniqueNumbersV2(numberList) {
//   if (numberList.length === 0) {
//     return 0;
//   }

//   // numberList.sort((a, b) => a - b);

//   const statistic = {};
//   for (let i = 0; i < numberList.length; i++) {
//     if (statistic[numberList[i]]) {
//       statistic[numberList[i]] += 1;
//     } else {
//       statistic[numberList[i]] = 1;
//     }
//   }
//   return Object.keys(statistic).length;
// }

function countUniqueNumbersV3(numberList) {
  const flag = {};
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    flag[number] = true;
  }

  return Object.keys(flag).length;
}

// console.log(countUniqueNumbersV2([1, 2, 2, 3, 1]));
// console.log(countUniqueNumbersV2([1, 2, 3]));
// console.log(countUniqueNumbersV2([1, 2, 2, 2, 2]));
// console.log(countUniqueNumbersV2([2, 2, 2, 2, 2]));
