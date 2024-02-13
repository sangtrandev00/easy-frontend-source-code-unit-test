function validMountainArray(numberList) {
  // your code here

  if (!Array.isArray(numberList) || numberList.length < 3) {
    return false;
  }

  const maxArr = Math.max(...numberList);
  const indexMax = numberList.indexOf(maxArr);

  // for (let i = 0; i < numberList.length; i++) {
  //   if(numberList[i] < numberList[i + 1] )
  // }

  for (let i = 0; i < indexMax; i++) {
    if (numberList[i] >= numberList[i + 1]) {
      // || maxArr <= numberList[i]
      return false;
    }
  }

  if (indexMax + 1 === numberList.length) {
    return false;
  }

  for (let i = indexMax; i < numberList.length - 1; i++) {
    if (numberList[i] <= numberList[i + 1]) {
      // || maxArr >= numberList[i]
      return false;
    }
  }

  return true;
}

console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([3, 2, 1]));
console.log(validMountainArray([0, 3, 2, 1, 8, 2]));
console.log(validMountainArray([0, 9, 2, 1, 8, 2, 3, 6]));
console.log(validMountainArray([0, 3, 9, 1, 8, 2]));
console.log(validMountainArray([0, 3, 9, 8, 7, 2]));
console.log(validMountainArray([0, 1, 2]));
console.log(validMountainArray([1]));
console.log(validMountainArray([3, 5, 5])); // true ??? -> false
console.log(validMountainArray(1));
