// String exercise

// Write a javascript function to parameterize a string.
// Ex: parametize('Code Js is Fun) -> 'Code-js-is-fun';

// version1
function parametize(string) {
  return string.toLowerCase().replaceAll(' ', '-');
}

// version2

function parametizeVersion2(string) {
  return string.toLowerCase().split(' ').join('-');
}

console.log('use Javascript parameterize version 1');
console.log(parametize('Tran Nhat Sang'));
console.log(parametize('Code Js is fun'));
console.log(parametize('Study front end from Hau easy front end is hard!!!'));

console.log('use Javascript parameterize version 2');
console.log(parametizeVersion2('Tran Nhat Sang'));
console.log(parametizeVersion2('Code Js is fun'));
console.log(parametizeVersion2('Study front end from Hau easy front end is hard!!!'));
