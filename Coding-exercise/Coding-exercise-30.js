// function mostFrequent(numberList) {
//   // your code here

//   if (!Array.isArray(numberList) || numberList.length === 0) {
//     return undefined;
//   }

//   let objStatistic = {};

//   let max = null;
//   let count = 1;
//   for (let i = 0; i < numberList.length; i++) {
//     if (objStatistic[numberList[i]]) {
//       objStatistic[numberList[i]] += 1;
//     } else {
//       objStatistic[numberList[i]] = 1;
//     }
//   }

//   for(const key in objStatistic) {
//     if(objStatistic[key] === null) {
//       max = numberList[0];
//     }

//     if(count < objStatistic[key]) {
//       count = objStatistic[key];
//       max =
//     }
//   }
//   return max;
// }

function mostFrequent(numberList) {
  //validate args
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let index = 0; index < numberList.length; index++) {
    if (Number.isNaN(Number.parseInt(numberList[index]))) return undefined;
  }

  //process

  const frequentObj = numberList.reduce((obj, currentNumber) => {
    obj[currentNumber] = (obj[currentNumber] || 0) + 1;
    return obj;
  }, {});
  let result = null;
  let resultCount = 1;
  for (const key in frequentObj) {
    if (result === null) {
      result = numberList[0];
    }

    if (resultCount < frequentObj[key]) {
      resultCount = frequentObj[key];
      result = Number.parseInt(key);
    }
  }

  return result;
}

console.log(mostFrequent([2, 1, 3]));
console.log(mostFrequent([3, 2, 2, 3])); // wrong. Van chua oke
console.log(mostFrequent([2, 2, 3, 3, 2, 3, 3, 3]));
console.log(mostFrequent([1, 2, 3]));
