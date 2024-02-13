// practice create some is Even

function checkIfOneEven(arr) {
  if (!Array.isArray(arr)) {
    return 'Your argument is not an array';
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) return true;
  }

  return false;
}

console.log(checkIfOneEven([1, 2, 3]));
console.log(checkIfOneEven([1, 1, 1]));
console.log(checkIfOneEven([]));
console.log(checkIfOneEven('tran nhat sang'));
console.log(checkIfOneEven(1234));
console.log(checkIfOneEven({}));
