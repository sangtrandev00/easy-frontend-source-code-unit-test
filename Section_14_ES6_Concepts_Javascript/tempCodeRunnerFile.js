function divisibleBy(n) {
  // your code here

  let objNum = {
    count: n,
  };

  if (objNum['count']) {
    objNum['newCount'] = n;
  }

  return function () {
    if (objNum['count']) {
      return objNum['newCount'] % objNum['count'] === 0;
    }
  };
}

const isDivisibleByTwo = divisibleBy(2);

console.log(isDivisibleByTwo(3)); // true;