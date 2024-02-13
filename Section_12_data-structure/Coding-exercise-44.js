function isValidBracketPairs(str) {
  // your code here
  if (str.length === 0) {
    return false;
  }

  const stack = [];
  //  { (a * b ) + [c - d] }
  const pairs = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  let i = 0;
  while (i < str.length) {
    let character = str[i];

    switch (character) {
      case '{':
      case '[':
      case '(':
        stack.push(character);
        break;
      case '}':
      case ']':
      case ')':
        if (stack[stack.length - 1] !== pairs[character]) {
          return false;
        }
        stack.pop();
      default:
        break;
    }
    i++;
  }
  return stack.length === 0;
}

// console.log(isValidBracketPairs('{ (a * b ) + [c - d] }'));
// console.log(isValidBracketPairs('{ (a * b  + [c - d] }'));
// console.log(isValidBracketPairs('{ (a * b ) + [c - d] '));

// cach nay cua anh Hau.
function isValidBracketPairsV2(str) {}
