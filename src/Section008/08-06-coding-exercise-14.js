const object1 = {
  id: 1,
  name: 'Tran Nhat Sang',
};

const object2 = {
  major: 'CNTT',
  language: 'Viet Namese',
  marks: {
    math: 9,
    english: 10,
    literature: {
      final: 10,
      test: 9.2,
    },
  },

  hello() {
    console.log('heello Viet Nam');
  },
};

const clonedObject = Object.assign({}, object1, object2);

clonedObject.marks.math = 8;
clonedObject.marks.english = 7;
console.log(clonedObject);
console.log(object2);

function cloneObject(obj) {
  // your code here

  let newObject = {};
  for (let key in obj) {
    newObject[key] = obj[key];
  }
  return newObject;
}

const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB);
console.log(studentB.name);
console.log(studentA.math);
