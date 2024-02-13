function findLongestWordV1(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return undefined;
  }

  if (wordList.some((word) => typeof word !== 'string')) {
    return undefined;
  }

  let longestWord = wordList[0];

  for (let i = 1; i < wordList.length; i++) {
    if (longestWord.length < wordList[i].length) {
      longestWord = wordList[i];
    }
  }

  return longestWord;
}

// version 2

function findLongestWordV2(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return undefined;
  }

  if (wordList.some((word) => typeof word !== 'string')) {
    return undefined;
  }

  let longestWord = wordList[0];

  wordList.forEach((word) =>
    longestWord.length < word.length ? (longestWord = word) : longestWord
  );

  return longestWord;
}

// version 3
function findLongestWordV3(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) {
    return undefined;
  }

  if (wordList.some((word) => typeof word !== 'string')) {
    return undefined;
  }

  return wordList.reduce((prevWord, CurrWord) =>
    prevWord.length < CurrWord.length ? CurrWord : prevWord
  );
}

console.log(findLongestWordV3(['tran nhat sang', '123', 'hello']));
console.log(
  findLongestWordV3([
    'tran nhat sang',
    'nguyen thi cam tu',
    'dao thi cam thach anh ta',
    'nguyen thi mai anh',
  ])
);

console.log(findLongestWordV3([]));
console.log(findLongestWordV3([1, 2, 3]));
console.log(findLongestWordV3('helo'));
console.log(findLongestWordV3(123));
