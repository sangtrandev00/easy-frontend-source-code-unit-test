// 1. Convert hour to seconds
// 2. Given 3 numbers, find max
// 3. Given 3 numbers, find max even number

// function converHourToSecond(hour) {
//   if (hour < 0) {
//     return -1;
//   }
//   const SECONDS_PER_HOUR = 3600;
//   return hour * SECONDS_PER_HOUR;
// }

// function findMaxIn3Number(a, b, c) {
//   let max = a;
//   if (max < b) {
//     max = b;
//   }

//   if (max < c) {
//     max = c;
//   }

//   return max;
// }

function findEvenNumber(n) {
  return n % 2 === 0;
}

function findMaxEvenNumber(a, b, c) {
  //   if (!findEvenNumber(a) && !findEvenNumber(b) && !findEvenNumber(c)) {
  //     return -1;
  //   }

  let max = Number.NEGATIVE_INFINITY;

  if (findEvenNumber(a) && max < a) {
    max = a;
  }

  if (findEvenNumber(b) && max < b) {
    max = b;
  }

  if (findEvenNumber(c) && max < c) {
    max = c;
  }

  return max;
}

console.log(findMaxEvenNumber(4, 5, 6));
