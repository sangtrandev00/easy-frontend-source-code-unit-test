// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  if (url === '') {
    return false;
  }

  if (url.indexOf('https') >= 0 || url.indexOf('wss') >= 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isSecureUrlV1('https://www.google.com'));
console.log(isSecureUrlV1('https://www.google.com.vn'));
console.log(isSecureUrlV1('wss://game.vn'));
console.log(isSecureUrlV1('ws:gamek.net'));
console.log(isSecureUrlV1('http:updateGame.io'));

// using startsWith()
function isSecureUrlV2(url) {
  // your code here

  if (url === '') {
    return false;
  }

  if (url.startsWith('https') || url.startsWith('wss')) {
    return true;
  } else {
    return false;
  }
}

console.log(isSecureUrlV2('https://www.google.com'));
console.log(isSecureUrlV2('https://www.google.com.vn'));
console.log(isSecureUrlV2('wss://game.vn'));
console.log(isSecureUrlV2('ws:gamek.net'));
console.log(isSecureUrlV2('http:updateGame.io'));
