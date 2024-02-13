const key = 'Power';
// const name = 'name';

const student = {
  id: 1,
  name: 'Easy Frontend',
  'hero type': 'iron man',
  [key]: 50,
  [`get${key}`]: function () {
    return 100;
  },
};

// console.log(student['name']);
// console.log(student['id']);
// console.log(student['Power']);

// console.log(student.id);
// console.log(student.name);
// console.log(student[key]);
// console.log(student.getPower());
console.log(student['getPower']());

// destructuring
const studentObj = {
  id: 1,
  name: 'Easy Frontend',
};

const { id, name } = studentObj;
console.log(id);
console.log(name);
