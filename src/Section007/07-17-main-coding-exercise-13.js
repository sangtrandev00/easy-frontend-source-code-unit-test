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

function getFullName(firstName, lastName) {
  // your code here
  if (firstName === '' && lastName === '') {
    return '';
  }

  firstName = capitalize(firstName);
  lastName = capitalize(lastName);

  if (lastName === '') {
    return firstName.trim();
  }

  let fullName;
  fullName = `${firstName} ${lastName}`;
  fullName = fullName.trim();
  return fullName;
}

console.log(getFullName('sang', 'tran'));
console.log(getFullName('', 'tran'));
console.log(getFullName('sang', ''));
console.log(getFullName('VAN', 'LAN'));
console.log(getFullName('john', 'pHAMm'));
console.log(getFullName('', ''));
