// Sttring exercise
// check if a string contains an email address with `@gmail.com ` or not

function checkGmailDomain(email) {
  if (email === '') {
    return false;
  }
  // this is not necessary for this function. I promise.

  if (email.includes('@gmail.com')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkGmailDomain('nhatsang@gmail.com.vn'));
console.log(checkGmailDomain('nhatsang@gmail'));
console.log(checkGmailDomain('nhatsang@gmail.com'));
console.log(checkGmailDomain('nhatsang@yahoo.com'));
console.log(checkGmailDomain(''));
