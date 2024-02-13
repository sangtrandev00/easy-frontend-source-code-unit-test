function uniqueLetters(str) {
  if (str.length === 0) {
    return '';
  }

  str = str.toLowerCase();
  const strArr = str.split('');

  if (strArr.length === 0) {
    return [];
  }

  const objStatistic = {};
  strArr.forEach((char) => {
    if (objStatistic[char]) {
      objStatistic[char] += 1;
    } else {
      objStatistic[char] = 1;
    }
  });

  for (const key in objStatistic) {
    if (objStatistic[key] > 1) {
      delete objStatistic[key];
    }
  }

  return Object.keys(objStatistic).join('');
}

// console.log(removeDuplicatedChar('tran nhat sang'));
// console.log(removeDuplicatedChar('tran nhat sang'));

// function uniqueLetters(str) {
//   // your code here

//   const strArr = str.split('');
//   const mainStringArr = strArr.reduce((str, char) => {
//     // str = str.indexOf(char) === -1 ? str.push(char) : '';

//     if (str.indexOf(char) === -1) {
//       str.push(char);
//     }
//     return str;
//   }, []);

//   return mainStringArr.join('');
// }

console.log(uniqueLetters('easy frontend'));
console.log(uniqueLetters('aabcccddeff'));

// function uniqueLettersV2(str) {
//   const strArr = str.split('');
// }
