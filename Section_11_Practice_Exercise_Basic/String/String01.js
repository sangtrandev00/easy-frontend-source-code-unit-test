export function countWords(str) {
  if (typeof str !== 'string') {
    return 0;
  }

  const wordArr = str.split(' ');

  return wordArr.length;
}

export function countWordsV2(str) {
  if (typeof str !== 'string') {
    return 0;
  }
  str = str.trim();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z' && str[i + 1] === ' ') {
      count++;
    }
  }

  return count + 1;
}

// console.log(countWordsV2('Toi phai la nguoi manh me nhat')); // expect 7
// console.log(countWordsV2('Toi')); // expect 1
// console.log(countWordsV2('Toi la')); // expect 2
// console.log(countWordsV2('Tran Nhat Sang')); // expect 3
// console.log(countWordsV2('Tran Nhat Sang muon thanh cong')); // expect 6
// console.log(countWordsV2('Tran Nhat Sang hoc lap trinh rat gioi')); // expect 8
