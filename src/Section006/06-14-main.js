function compareNumbers(a, b) {
  // your code here

  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}

console.log(compareNumbers(3, 4));
console.log(compareNumbers(6, 3));
console.log(compareNumbers(3, 3));
