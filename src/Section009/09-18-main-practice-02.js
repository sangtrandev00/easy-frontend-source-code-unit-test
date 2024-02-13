function findLongestWordforEach(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return undefined;
  }

  if (wordList.some((word) => typeof word !== 'string')) {
    return undefined;
  }

  let maxLength = wordList[0].length; // 14
  let maxItem = wordList[0]; // tran nhat sang

  //   wordList.forEach((word) =>
  //     word.length > maxLength ? ((maxItem = word), (maxLength = word.length)) : maxItem
  //   );

  wordList.forEach((word) => {
    if (maxLength < word.length) {
      maxItem = word;
      maxLength = word.length;
    }
  });

  return maxItem;
}

console.log(findLongestWordforEach(['tran nhat sang', '123', 'hello']));
console.log(
  findLongestWordforEach([
    'tran nhat sang',
    'nguyen thi cam tu',
    'dao nguyen van truong giang',
    'nguyen thi anh dao',
  ])
);
console.log(findLongestWordforEach([]));
console.log(findLongestWordforEach([1, 2, 3]));
console.log(findLongestWordforEach('helo'));
console.log(findLongestWordforEach(123));
