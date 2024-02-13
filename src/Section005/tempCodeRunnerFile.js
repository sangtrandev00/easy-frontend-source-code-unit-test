function sayHello(languageCode) {
  if (typeof languageCode !== 'string') {
    return undefined;
  }

  switch (languageCode) {
    case 'en':
      return 'Hello';
    case 'vi':
      return 'Xin chào';
    case 'fr':
      return 'Bonjour';
    case 'cn':
      return 'Nǐn hǎo';
    case 'ja':
      return 'Konnichiwa';
    case 'ko':
      return 'Anyoung haseyo';
    default:
      return 'Hello';
  }
}

module.exports = sayHello;

console.log(sayHello('en'));
console.log(sayHello('vi'));
console.log(sayHello('fr'));
console.log(sayHello('cn'));
console.log(sayHello('ja'));
console.log(sayHello());
console.log(sayHello('ok'));
console.log(sayHello([]));
console.log(sayHello({}));
console.log(sayHello('ok'));
console.log(sayHello('2fdsf'));
