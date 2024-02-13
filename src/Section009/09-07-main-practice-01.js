// const arrList = [];
// function callBackFn(element) {
//   return element;
// }

// function everyVersion2(callBackFn) {
//   isValid = false;

//   return isValid;
// }

// for (let i = 0; i < arrList.length; i++) {
//   // if(arrList[i])
// }

arrayList = [0, 1, 4, 8, 6];
function checkIfAllEven(arrList) {
  if (!Array.isArray(arrList)) {
    return false;
  }

  if (arrList.length === 0) {
    return false;
  }

  for (let i = 0; i < arrList.length; i++) {
    if (arrList[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
module.exports = checkIfAllEven;
// console.log(checkIfAllEven([1, 4, 5]));
// console.log(checkIfAllEven(123));
// console.log(checkIfAllEven(arrayList));
// console.log(checkIfAllEven('Tran Nhat Sang'));
