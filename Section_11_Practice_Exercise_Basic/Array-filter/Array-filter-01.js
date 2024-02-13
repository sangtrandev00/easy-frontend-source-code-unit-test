export function generateNumberInRange(a, b) {
  if (a == undefined || b == undefined) {
    return undefined;
  }

  const newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr;
}

// console.log(generateNumberInRange(1, 6));
// console.log(generateNumberInRange(5, 7));
// console.log(generateNumberInRange(7, 5));
