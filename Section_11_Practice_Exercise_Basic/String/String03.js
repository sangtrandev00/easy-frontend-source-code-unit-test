export function statisticsCharacters(str) {
  if (str === '') {
    return {};
  }

  const objChar = {};

  str.split('').forEach((character) => {
    if (objChar[character]) {
      objChar[character] += 1;
    } else {
      objChar[character] = 1;
    }
  });

  for (let key in objChar) {
    if (key === ' ') {
      objChar['space'] = objChar[key];
      delete objChar[key];
    }
  }

  return objChar;
}

console.log(statisticsCharacters('Tran Nhat Sang'));
console.log(statisticsCharacters('Nguyen van a'));
