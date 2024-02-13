function getMaxDigit(n) {
  // your code here
  let theTens, theOnes, theHundreds;

  theHundreds = Math.trunc(n / 100);
  if (n < 0 || n >= 1000) {
    return -1;
  }

  if (n.toString().length === 1) {
    return n;
  }

  if (n.toString().length === 2) {
    theTens = Math.trunc(n / 10);
    theOnes = Math.trunc(n % 10);
    if (theTens > theOnes) {
      return theTens;
    } else {
      return theOnes;
    }
  }

  if (n.toString().length === 3) {
    theTens = Math.trunc((n / 10) % 10);
    theOnes = Math.trunc((n % 100) % 10);
    theHundreds = Math.trunc(n / 100);

    let max = theOnes;
    if (max < theTens) {
      max = theTens;
    }
    if (max < theHundreds) {
      max = theHundreds;
    }
    return max;
  }
}

console.log(getMaxDigit(1));
console.log(getMaxDigit(12));
console.log(getMaxDigit(123));
console.log(getMaxDigit(921));
console.log(getMaxDigit(10000));
