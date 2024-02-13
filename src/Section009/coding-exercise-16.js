// using for...i
function createArrayInRangeV1(a, b) {
  // your code here
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return undefined;
  }

  if (a >= b || a <= -100 || a >= 100 || b <= -100 || b >= 100) {
    return undefined;
  }

  const newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }

  return newArr;
}

// using Array.from()
function createArrayInRangeV2(a, b) {
  // your code here
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return undefined;
  }

  if (a >= b || a <= -100 || a >= 100 || b <= -100 || b >= 100) {
    return undefined;
  }

  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step); // who can explain this code line. ?

  return range(a, b, 1);
}

// function createArrayInRangeV2(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
//     return undefined;
//   }

//   if (a >= b || a <= -100 || a >= 100 || b <= -100 || b >= 100) {
//     return undefined;
//   }

//   let string = '';
//   for (let i = a; i <= b; i++) {
//     string += i;
//   }

//   console.log(Array.from(string));
// }

console.log(createArrayInRangeV2(-2, 1));
console.log(createArrayInRangeV2(1, 5));

console.log(createArrayInRangeV1(1, 5));
console.log(createArrayInRangeV1(-2, 1));
console.log(createArrayInRangeV1(-20, 99));

console.log(createArrayInRangeV1(123));
console.log(createArrayInRangeV1(-101, 22));
