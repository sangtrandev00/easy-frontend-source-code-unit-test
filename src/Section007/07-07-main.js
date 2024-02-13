// write a function to transform a string;
// - The first letter in uppercase
// - The rest in lowercase
// Eg: capitalize('easy Frontend') -> 'Easy frontend';
let string = 'EASY FRONTEND';

function capitalize(string) {
  if (string === '') {
    return '';
  }

  const firstLetter = string[0].toUpperCase();
  let restLetters = string.slice(1);
  const restLettersLower = restLetters.toLowerCase();
  const newString = `${firstLetter}${restLettersLower}`;
  return newString;
}

console.log(`String: ${string} after use capitalize is: => ${capitalize(string)}`); // expect: Easy frontend; -> this is true!!

console.log(capitalize(''));
console.log(capitalize('tao lao bi dao'));
console.log(capitalize('This is me Hello World'));
