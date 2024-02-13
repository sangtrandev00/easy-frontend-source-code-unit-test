function isSymmetricNumber(n) {
  // your code here

  if (n.toString().length === 1) {
    return true;
  }

  if (n.toString().length === 2) {
    const theOnes = n % 10;
    const theTens = Math.trunc(n / 10);
    if (theOnes === theTens) {
      return true;
    } else {
      return false;
    }
  }

  if (n.toString().length === 3) {
    let theOnes = (n % 100) % 10;
    let theHundreds = Math.trunc(n / 100);
    if (theOnes === theHundreds) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isSymmetricNumber(323));
console.log(isSymmetricNumber(222));
console.log(isSymmetricNumber(111));
console.log(isSymmetricNumber(101));
console.log(isSymmetricNumber(999));
console.log(isSymmetricNumber(808));
console.log(isSymmetricNumber(123));
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(33));
