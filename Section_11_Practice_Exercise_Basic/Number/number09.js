export function hasTwoDigitsWithSum(n, sum) {
  if (n <= 9 || n >= 1000000) {
    return false;
  }

  if (sum <= 0 || sum >= 19) {
    return false;
  }
  const newArr = n.toString().split('');

  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (Number(newArr[i]) + Number(newArr[j]) === sum) {
        return true;
      }
    }
  }

  return false;
}

// console.log(hasTwoDigitsWithSum(12, 3)); // true;
// console.log(hasTwoDigitsWithSum(120, 2)); // true;
// console.log(hasTwoDigitsWithSum(1234, 7)); // true;
// console.log(hasTwoDigitsWithSum(12345, 9)); // true;
// console.log(hasTwoDigitsWithSum(120005, 6)); // true;
