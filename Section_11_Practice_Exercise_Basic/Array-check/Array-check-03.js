export function hasEasyFrontend(wordList) {
  if (!Array.isArray(wordList)) {
    return false;
  }

  let countEasy = 0;
  let countFrontEnd = 0;

  wordList.forEach((word) => {
    if (word.includes('easy')) {
      countEasy += 1;
    }
    if (word.includes('frontend')) {
      countFrontEnd += 1;
    }
  });

  return countEasy + countFrontEnd >= 2 ? true : false;
}
