export function countEmails(str) {
  if (str === '') {
    return 0;
  }

  const emailArr = str.split(' ').filter((word) => {
    return word !== '' && word.indexOf('@') >= 1 && word.indexOf('@') <= word.length - 2;
  });
  const finalEmails = [];
  emailArr.forEach((email) => {
    let beforeDomain = email.substring(0, email.indexOf('@'));
    let domain = email.substring(email.indexOf('@'), email.indexOf('.'));
    if (beforeDomain.length >= 3 && domain.length >= 3) {
      finalEmails.push(email);
    }
  });
  return finalEmails.length;
}

console.log(countEmails('my email should be abc@super.com'));
console.log(
  countEmails('my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn')
);

console.log(countEmails('Hello'));
console.log(countEmails('@hello'));
console.log(countEmails('hello@'));
