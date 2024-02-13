function countWords(str) {
  // your code here
  if (str.length === 0) {
    return 0;
  }

  return str.split(' ').filter((word) => word !== '').length;
}

console.log(countWords('  easy    frontend'));
console.log(countWords('easy'));
console.log(countWords(''));
