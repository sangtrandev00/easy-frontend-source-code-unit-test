// 1. Get the ones of a number having 3 digits

function getTheOnes(number) {
  //   if (number < 100 || number > 999) {
  //     return 'you enter the wrong number';
  //   }

  // version 2 check argument

  if (number.toString().length !== 3) {
    return 'you enter the wrong number';
  }

  const theOne = (number % 100) % 10;
  return theOne;
}
// 2. Get the tens of a number having 3 digits

function getTheTens(number) {
  if (number < 100 || number > 999) {
    return 'you enter the wrong number';
  }

  const theTen = Math.trunc(number / 10) % 10;
  return theTen;
}
// 3. Get the hundreds of a number having 3 digits

function getTheHundreds(number) {
  if (number < 100 || number > 999) {
    return 'you enter the wrong number';
  }

  const theHundred = Math.trunc(number / 100);
  return theHundred;
}

const x = 12;

console.log(`Get the ones of a number having 3 digits ${x} is:  ` + getTheOnes(x));
console.log(`Get the tens of a number having 3 digits ${x} is:  ` + getTheTens(x));
console.log(`Get the hundreds of a number having 3 digits ${x} is:  ` + getTheHundreds(x));

// 4. Sum all digits of a number having 3 digits

function calcSumAllDigits(number) {
  if (number < 100 || number > 999) {
    return 'you enter the wrong number';
  }

  return getTheOnes(number) + getTheTens(number) + getTheHundreds(number);
}

console.log(`Sum all digits of a number having 3 digits ${x} is: ` + calcSumAllDigits(x)); // expect 19

console.log("i don't think so! hehe");


