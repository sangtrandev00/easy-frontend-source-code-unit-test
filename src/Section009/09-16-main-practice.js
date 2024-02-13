// Array exercises
//1. print numbers : 1--> 10.

function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function printNumbersV2(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  arr.forEach((element) => console.log(element));
}
printNumbersV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printNumbers();

//2. print even numbers [2,4,6,8,10];

function printEvenNumbers() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

function printEvenNumbersMethod2() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvenNumbersMethod2();

function printEvenNumbersV2(arr) {
  // if check argument.
  if (!Array.isArray(arr)) {
    return undefined;
  }

  arr.forEach((element) => {
    if (element % 2 === 0) {
      console.log(element);
    }
  });
}
printEvenNumbersV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printEvenNumbers();

// 3. print even numbers but less than n

function printEvenNumberLessThanN(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}

printEvenNumberLessThanN(1);
