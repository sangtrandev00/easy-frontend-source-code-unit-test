function findSecret(code) {
  // your code here
  let secret = '';
  for (let i = 0; i < code.length; i++) {
    if (code[i] >= 'a' && code[i] <= 'z') {
      secret = secret.concat(code[i]);
    }
  }
  return secret;
}

console.log(findSecret('PASSSSwordHELLOframe'));
