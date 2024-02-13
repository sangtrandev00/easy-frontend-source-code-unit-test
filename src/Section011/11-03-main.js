export function isIncreasingNumberV1(n) {
  if (n <= 0 || n > 1000000 || n.toString().length === 1) {
    return false;
  }

  const numberArr = n.toString().split('');
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] >= numberArr[i + 1]) {
      return false;
    }
  }

  return true;
}

export function isIncreasingNumberV2(n) {
  if (n <= 0 || n > 1000000 || n.toString().length === 1) {
    return false;
  }

  let flag = 0;
  n.toString()
    .split('')
    .forEach((number, index, array) => {
      if (array[index] >= array[index + 1]) {
        flag++;
      }
    });

  return flag > 0 ? false : true;
}

export function isIncreasingNumberV3(n) {
  if (n <= 0 || n > 1000000 || n.toString().length === 1) {
    return false;
  }

  const newNumberArr = n
    .toString()
    .split('')
    .filter((number, index, array) => {
      return array[index] >= array[index + 1];
    });
  return newNumberArr.length > 0 ? false : true;
}

export function isIncreasingNumberV4(n) {
  if (n <= 0 || n > 1000000 || n.toString().length === 1) {
    return false;
  }
  const firstNumberWrong = n
    .toString()
    .split('')
    .find((number, index, array) => {
      return number >= array[index + 1];
    });

  return firstNumberWrong > 0 ? false : true;
}

export function isIncreasingNumberV5(n) {
  if (n <= 0 || n > 1000000 || n.toString().length === 1) {
    return false;
  }
  let count = 0;
  const countWrongNumber = n
    .toString()
    .split('')
    .reduce((prev, current, index, array) => {
      if (current >= array[index + 1]) {
        return count++;
      } else {
        return count;
      }
    }, 0);
  return countWrongNumber > 0 ? false : true;
}

// console.log(isIncreasingNumberV5(12345));
// console.log(isIncreasingNumberV5(32));
