function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }

  const uniqueNumbers = new Set(numberList);
  return [...uniqueNumbers];
}

console.log(uniqueNumbers([1, 1, 1, 2, 2, 3, 3, 3]));

function uniqueLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  const uniqueLetters = new Set(str);
  //   return [...uniqueLetters];
  return Array.from(uniqueLetters).join('');
}

console.log(uniqueLetter('aabbbcccccddddeeee'));

// using 2 method to get giao nhau ( intersection );
function getIntersectionSet(set1, set2) {
  const intersectionSet = new Set();
  for (const number1 of set1) {
    for (const number2 of set2) {
      if (number1 === number2) {
        intersectionSet.add(number1);
      }
    }
  }

  return intersectionSet;
}

function getIntersectionSetV2(set1, set2) {
  const intersectionSet = new Set();
  set1.forEach((number) => {
    set2.forEach((number2) => {
      if (number === number2) {
        intersectionSet.add(number);
      }
    });
  });

  return intersectionSet;
}

const set1 = new Set([3, 3, 4, 4, 5, 6, 6, 7]);
const set2 = new Set([1, 2, 3, 3, 5, 4, 5, 6, 7, 8, 8, 9]);

console.log(getIntersectionSet(set1, set2));
console.log(getIntersectionSetV2(set1, set2));
