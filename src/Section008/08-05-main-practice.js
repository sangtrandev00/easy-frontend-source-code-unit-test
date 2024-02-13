// exercise 1
'use strict';
// version 1: create an object
const student = {
  name: 'Easy Frontend',
  age: 18,
};

// version 2: create an object

const student2 = {};

student2['age'] = 18;
student2['name'] = 'Tran Nhat Sang';

console.log(student2);

// exercise 2: check if object is empty.
//version 1:
function isEmpty(object) {
  let count = 0;
  for (key in object) {
    count++;
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

//version 2: Viet theo nhu trong video.

function isEmptyVersion2(object) {
  return Object.keys(object).length === 0;
}

console.log(isEmptyVersion2({ id: 1 }));
console.log(isEmptyVersion2({}));

function calcAvgMark(mark) {
  if (typeof mark !== 'object') {
    return -1;
    // if(mark is not an object);
  }
  let sum = 0,
    count = 0;
  for (let key in mark) {
    count++;
    sum += mark[key];
  }
  return (sum / count).toFixed(2);
}

console.log(calcAvgMark({ math: 9.9, english: 8 }));
console.log(calcAvgMark(123));
console.log(calcAvgMark('Tran Nhat Sang'));
