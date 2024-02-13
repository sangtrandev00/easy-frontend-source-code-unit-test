// function isIncreasingNumberV1(n) {
//   if (n <= 0 || n > 1000000 || n.toString().length === 1) {
//     return false;
//   }

//   const numberArr = n.toString().split('');
//   for (let i = 0; i < numberArr.length; i++) {
//     if (numberArr[i] >= numberArr[i + 1]) {
//       return false;
//     }
//   }

//   return true;
// }
// function isIncreasingNumberByDistance(n, x) {
//   if (n < 10 || n > 1000000) {
//     return false;
//   }

//   if (isIncreasingNumberV1(n) === false) {
//     return false;
//   }
//   const numberArr = n.toString();

//   for (let i = 0; i < numberArr.length - 1; i++) {
//     if (Number(numberArr[i + 1]) - Number(numberArr[i]) !== x) {
//       return false;
//     }
//   }

//   return true;
// }

// function isNextIndex(arrIndex) {
//   for (let i = 0; i < arrIndex.length - 1; i++) {
//     if (arrIndex[i + 1] - arrIndex[i] !== 1) {
//       return false;
//     }
//   }

//   return true;
// }

export function isSubArray(a, b) {
  if (a.length === 0) {
    return true;
  }

  if (a.length > b.length) {
    return false;
  }

  let check = 0;

  for (let i = 0; i < b.length; i++) {
    if (b[i] === a[0]) {
      check = 1;
      let start = i;
      for (let j = 0; j < a.length; j++) {
        if (a[j] !== b[start++]) {
          check = 0;
          break;
        }
      }
    }
  }

  return check === 1 ? true : false;
}
const a = [1, 2];
const b = [1, 2, 3];
const c = [3, 2, 1];

console.log(isSubArray(a, b));
