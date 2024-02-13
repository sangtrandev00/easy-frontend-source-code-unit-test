const fullName = 'Easy';

function profile() {
  const fullName = 'Frontend';
  function sayName() {
    const fullName = 'Boom';
    function writeName() {
      return fullName;
    }
    return writeName();
  }

  return sayName();
}

console.log(profile());
