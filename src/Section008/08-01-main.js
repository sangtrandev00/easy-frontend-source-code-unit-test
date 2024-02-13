const student = {
  id: 1,
  name: 'Van A',
  isHero: true,

  'avg mark': 9,
  sayHi() {
    console.log('hello');
  },
};

// console.log(student.name);
// console.log(student.id);
// console.log(student.isHero);
// console.log(student['avg mark']);

// console.log(student['name']);
// console.log(student['id']);
// console.log(student['isHero']);
// console.log(student['']);

const idPass = 'id';
const namePass = 'name';
const isHeroPass = 'isHero';
const avgMarkPass = 'avg mark';

console.log(student[idPass]);
console.log(student[namePass]);
console.log(student[isHeroPass]);
console.log(student[avgMarkPass]);
student['sayHi'];

student['sayHi()'];
