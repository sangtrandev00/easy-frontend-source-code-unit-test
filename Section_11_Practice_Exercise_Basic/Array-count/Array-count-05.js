export function countNumbersNotInB(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (b.every((num) => num != a[i])) count++;
  }

  return count;
}

// console.log(countNumbersNotInB([1, 2, 3], [4, 5]));
// console.log(countNumbersNotInB([1, 2, 3], [1, 2, 3]));
// console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5]));
