const numberList = [2, 4, 6];

numberList.forEach(function callBackFn(element, index, array) {
  console.log(`numberList[${index}] value is: ${element} of arr[${array}]`);
});

// arrow function example

const sum = (a, b) => {
  return a + b;
};

const sum2 = (a, b) => a + b;

console.log(sum(12, 14));
