// Rut trich domain tu dia chi email

// using split
function extractDomainV1(email) {
  // your code here
  let emailArr = email.split('@');
  return emailArr[emailArr.length - 1].toString();
}

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  const emailIndex = email.indexOf('@');

  return email.slice(emailIndex + 1);
}
// let emailArr = 'nhatsang@gmail.com'.split('@');

// console.log(emailArr[emailArr.length - 1].toString());

console.log(extractDomainV2('nhatsang@gmail.com'));
console.log(extractDomainV2('sangtnps20227@gmail.com'));
console.log(extractDomainV2('ninhi@yahoo.com.vn'));
