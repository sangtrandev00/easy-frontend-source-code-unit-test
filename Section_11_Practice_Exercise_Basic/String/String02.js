export function statisticsWords(str) {
  if (str === '') {
    return {};
  }
  const obj = {};
  const newArr = str.split(' ').filter((string) => string !== '');

  newArr.forEach((word) => {
    if (obj[word]) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  });
  return obj;
}

console.log(statisticsWords('Tran Nhat Sang'));
console.log(statisticsWords('easy frontend is easy'));
