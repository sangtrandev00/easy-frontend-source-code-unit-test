export function findSumPair(numberList, targetSum) {
  if (numberList.length === 0) {
    return [];
  }
  if (Object.is(numberList, {})) {
    return [];
  }
  const finalArr = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] + numberList[j] === targetSum) {
        finalArr.push(numberList[i]);
        finalArr.push(numberList[j]);
        return finalArr.sort((a, b) => a - b);
      }
    }
  }
  //   finalArr.sort((a, b) => a - b);
  return finalArr;
}

// export function findSumPairArr(numberList, targetSum) {
//   if (numberList.length === 0) {
//     return [];
//   }
//   if (Object.is(numberList, {})) {
//     return [];
//   }
//   const finalArr = [];

//   for (let i = 0; i < numberList.length - 1; i++) {
//     for (let j = i + 1; j < numberList.length; j++) {
//       const newArr = [];
//       if (numberList[i] + numberList[j] === targetSum) {
//         newArr.push(numberList[i]);
//         newArr.push(numberList[j]);
//         finalArr.push(newArr.sort((a, b) => a - b));
//       }
//     }
//   }
//   //   finalArr.sort((a, b) => a - b);
//   return finalArr;
// }

// // console.log(findSumPair([3, 2, 1], 5));
// // console.log(findSumPair([3, 2, 7, 1, 0, 6, 2], 9));
// // console.log(findSumPair([3, 2, 1], 5));
// // console.log(findSumPair([3, 2], 5));

// console.log(findSumPairArr([3, 2, 7, 1, 0, 6, 2], 9));
