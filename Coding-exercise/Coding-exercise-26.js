function isAtLeast8Char(password) {
  return password.length >= 8;
}

function hasUpperCaseChar(password) {
  const arrPasswords = password.split('');
  return arrPasswords.some((char) => char === char.toUpperCase());
}

function hasLowerCaseChar(password) {
  const arrPasswords = password.split('');
  return arrPasswords.some((char) => char === char.toLowerCase());
}

function hasNumber(password) {
  const arrPasswords = password.split('');
  return arrPasswords.some((char) => !isNaN(char));
}

function hasSpecialChar(password) {
  const arrPasswords = password.split('');
  return arrPasswords.some(
    (char) =>
      char === '!' ||
      char === '@' ||
      char === '$' ||
      char === '%' ||
      char === '^' ||
      char === '&' ||
      char === '(' ||
      char === ')' ||
      char === '*' ||
      char === '#'
  );
}

function isStrongPassword(password) {
  // your code here
  return (
    isAtLeast8Char(password) &&
    hasUpperCaseChar(password) &&
    hasLowerCaseChar(password) &&
    hasNumber(password) &&
    hasSpecialChar(password)
  );
}
