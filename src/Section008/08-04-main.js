const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
};

for (let key in student) {
  console.log('key: ', key); // id, name, isHero
  console.log('Value: ', student[key]); // 1, 'Van A', true
}
