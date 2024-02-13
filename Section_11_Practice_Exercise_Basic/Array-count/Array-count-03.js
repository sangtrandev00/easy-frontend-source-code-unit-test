export function countWords(wordList, n) {
  let count = 0;

  wordList.forEach((word) => {
    if (word.length >= n) {
      count++;
    }
  });

  return count;
}
