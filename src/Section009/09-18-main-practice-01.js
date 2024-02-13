// write a function to find the logest word.
// for ... i
// forEach
// reduce
// Vd: ['a', 'bc', 'cde'] ->> 'abc'

function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return undefined;
  }

  if (wordList.some((word) => typeof word !== 'string')) {
    return undefined;
  }

  let maxLength = wordList[0].length; // 14
  let maxItem = wordList[0]; // tran nhat sang
  for (let i = 1; i < wordList.length; i++) {
    if (wordList[i].length > maxLength) {
      maxItem = wordList[i];
      maxLength = wordList[i].length;
    }
  }
  return maxItem;
}

console.log(findLongestWord(['tran nhat sang', '123', 'hello']));
console.log(
  findLongestWord([
    'tran nhat sang',
    'nguyen thi cam tu',
    'dao thi cam thach anh',
    'nguyen thi van anh',
  ])
);
console.log(findLongestWord([]));
console.log(findLongestWord([1, 2, 3]));
console.log(findLongestWord('helo'));
console.log(findLongestWord(123));
