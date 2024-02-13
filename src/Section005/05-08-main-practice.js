function checkPostiveEven(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    return false;
  }

  let isValid; // ky thuat dat co hieu! undefined

  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

let x = -1;

//v4

// function isPositiveEven(n) {
//   return n > 0 && n % 2 === 0;
// }

// if (isPositiveEven(5)) {
//   console.log('Yes this is a positive even number!');
// } else {
//   console.log('your are not true!!!');
// }

// v3

function isPositiveEven(n) {
  isValid = false;
  if (n % 2 === 0 && n > 0) {
    return true;
  }
}

// console.log(checkPostiveEven(123));
// console.log(checkPostiveEven(2));
// console.log(checkPostiveEven('123'));
// console.log(checkPostiveEven({}));
// console.log(checkPostiveEven([]));

module.exports = checkPostiveEven;
