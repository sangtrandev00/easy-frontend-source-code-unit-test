let str = 'tran nhat sang';

function removeVowel(str) {
  // your code here
  if (str === '') {
    return '';
  }

  return str
    .replace('u', '')
    .replace('e', '')
    .replace('o', '')
    .replace('a', '')
    .replace('i', '')
    .trim();
}

console.log(removeVowel('tran nhat sang'));
console.log(removeVowel('say hello'));
console.log(removeVowel('an kem kho'));
console.log(removeVowel('a em muon gi i'));
