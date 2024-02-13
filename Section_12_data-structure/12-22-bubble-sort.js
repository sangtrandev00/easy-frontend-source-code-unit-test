function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }

  for (let i = numberList.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        const temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }

  return numberList;
}

console.log(bubbleSort([1, 2, 3, 7, 5, 9, 4, 6, 5, 1, 4, 2]));
