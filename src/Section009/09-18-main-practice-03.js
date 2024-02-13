function findLongestWordReduce(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return undefined;
  }

  if (wordList.some((word) => typeof word !== 'string')) {
    return undefined;
  }

  //   let maxLength = wordList[0].length;
  //   wordList.forEach((word) => (word.length > maxLength ? (maxItem = word) : maxItem));

  return wordList.reduce((acc, word) => (word.length < acc.length ? acc : word));
}

console.log(findLongestWordReduce(['tran nhat sang', '123', 'hello']));
console.log(
  findLongestWordReduce([
    'tran nhat sang',
    'nguyen thi cam tu',
    'dao thi cam thach anh ta',
    'nguyen thi mai anh',
  ])
);
console.log(findLongestWordReduce([]));
console.log(findLongestWordReduce([1, 2, 3]));
console.log(findLongestWordReduce('helo'));
console.log(findLongestWordReduce(123));
