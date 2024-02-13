function compareFn(a, b) {
  return a - b;
}

console.log(typeof [2, 1, 3].sort(compareFn));
console.log(typeof [2, 1, 3].sort());

console.log([1, 2, 3, 4, 6, 2, 46, 5353, 3522, 266].sort((a, b) => b - a)); // sap xep giam dan
console.log([1, 2, 3, 4, 6, 2, 46, 5353, 3522, 266].sort((a, b) => a - b)); // sap xep tang dan

// build ham.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // increase.
        let temp;
        temp = arr[i];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}

console.log(bubbleSort([1, 5, 6, 2, 4, 56, 24, 62]));
