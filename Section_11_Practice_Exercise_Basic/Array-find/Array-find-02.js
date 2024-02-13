export function findLongestWord(wordList) {
  if (wordList.length === 0) {
    return '';
  }

  const newWordList = wordList.filter((word) => word.length <= 5 && !word.includes(' '));
  if (newWordList.length === 0) {
    return '';
  }
  let max = newWordList[0];
  for (let i = 1; i < newWordList.length; i++) {
    if (max.length < newWordList[i].length) {
      max = newWordList[i];
    }
  }

  return max;
}

console.log(findLongestWord(['DAVID', 'cool', 'inta']));
console.log(findLongestWord(['tran van lan', 'loan', 'chim e']));
