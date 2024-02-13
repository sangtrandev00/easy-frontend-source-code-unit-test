function bubbleSort(numberList) {
  // your code here
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] < numberList[j + 1]) {
        let temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }

  return numberList;
}

console.log(bubbleSort([1, 1, 1, 2, 3, 4, 64, 6, 2, 4, 62, 56]));
