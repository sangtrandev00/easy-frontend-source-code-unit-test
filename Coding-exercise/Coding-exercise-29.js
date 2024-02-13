function mergeArray(a, b) {
  // your code here
  if (!Array.isArray(a) && !Array.isArray(b)) {
    return [];
  }

  if (!Array.isArray(a) || !Array.isArray(b)) {
    return [];
  }

  const concatArr = a.concat(b);
  const newArr = [];
  concatArr.forEach((number) => {
    if (newArr.indexOf(number) === -1) {
      newArr.push(number);
    }
  });

  return newArr;
}

console.log(mergeArray([1, 2, 3, 4], [2, 3, 4, 5]));
console.log(mergeArray([], []));
