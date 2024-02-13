function isNumberStartWithOddNumber(n) {
  let unsignNumber = Math.abs(n); // tru truong hop la so am -123 -> lay so thu 2 la: 1.

  if (unsignNumber.toString().length === 1 && unsignNumber % 2 !== 0) {
    return true;
  }

  const arr = unsignNumber.toString().split('');
  if (Number(arr[0]) % 2 !== 0) {
    return true;
  }

  return false;
}

export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList)) {
    return [];
  }

  const newNumberList = [];

  numberList.forEach((num) => {
    if (isNumberStartWithOddNumber(num)) {
      newNumberList.push(num);
    }
  });

  return newNumberList.length > 0 ? newNumberList : [];
}

// function findAllNumbersV2(numberList) {
//   if (!Array.isArray(numberList)) {
//     return [];
//   }

//   return numberList.filter((num) => isNumberStartWithOddNumber(num));
// }

// console.log(findAllNumbersV2([1, 4, 5]));
// console.log(findAllNumbersV2([234, 421, 125]));
// console.log(findAllNumbersV2([2, 4, 6]));
