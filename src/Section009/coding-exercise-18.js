// using for...i to loop from 1 to n
function getDivisorListV1(n) {
  // your code here
  if (n <= 0 && Math.floor(n) !== n) {
    return undefined;
  }
  const divisorList = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisorList.push(i);
    }
  }
  return divisorList;
}

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
  // your code here

  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  return range(1, n, 1).filter((number) => {
    return n % number === 0;
  });
}

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
  // your code here

  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  const newArr = [];
  range(1, n, 1).forEach((number, index) => {
    if (n % number === 0) {
      newArr.push(number);
    }
  });
  return newArr.sort((a, b) => a - b);
}
//version 1
console.log(getDivisorListV1(20));

//version 2

//version 3
console.log(getDivisorListV3(20));
console.log(getDivisorListV3(10));
console.log(getDivisorListV3(18));
console.log(getDivisorListV3(32));
