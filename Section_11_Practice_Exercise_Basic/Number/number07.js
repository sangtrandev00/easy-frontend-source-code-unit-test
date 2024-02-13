export function isSymetricNumber(n) {
  if (n >= 1000000 || n < 10) {
    return false;
  }

  let newArr = n.toString().split('');

  let count = 0;
  let first = 0;
  let last = newArr.length - 1;
  for (let i = 0; i < newArr.length; i++) {
    if (first === last) {
      break;
    }

    if (first > last) {
      break;
    }
    if (newArr[first] === newArr[last]) {
      // 0 vs 2
      first++; // 1
      last--; // 1
      count++; // 1
    } else {
      count = 0;
    }
  }

  if (count > 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isSymetricNumber(11));
// console.log(isSymetricNumber(212));
// console.log(isSymetricNumber(3223));
// console.log(isSymetricNumber(77977));
// console.log(isSymetricNumber(889988));
