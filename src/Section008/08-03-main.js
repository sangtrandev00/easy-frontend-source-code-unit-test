const student = {
  name: 'Easy Frontend',
  age: 18,
};

const moreProps = {
  isHero: true,
  gender: 'male',
};

// version 1: using Object. assign();

const clonedStudent = Object.assign({}, student, moreProps);
console.log(clonedStudent);
// version 2: using spread operator (shorter, easier to read);

const clonedStudent2 = {
  ...student,
  ...moreProps,
};

console.log(clonedStudent2);
