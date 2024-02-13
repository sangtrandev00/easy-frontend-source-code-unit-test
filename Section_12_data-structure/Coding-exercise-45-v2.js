const PIN_LENGTH = 6;
function isValidPIN(pin) {
  // your code here ...

  if (pin.lenth !== PIN_LENGTH) {
    return false;
  }

  const hasNoDigits = Array.from(pin).some((x) => x < '0' || x > '9');

  if (hasNoDigits) {
    return false;
  }

  const descreaseNumbers = '9876543210';
  const increaseNumbers = '0123456789';

  const isDescreasingOrIncreasingContinuous =
    descreaseNumbers.includes(pin) || increaseNumbers.includes(pin);
  if (isDescreasingOrIncreasingContinuous) {
    return false;
  }

  //   const hasDigitAppearMoreThanTwice =

  const uniqueNumbers = new Set(pin);
  if (pin.length !== uniqueNumbers.size) {
    return false;
  }
}

const pin = '111234';
const pin1 = '123233';
const pin2 = '454545';

const uniqueNumbers = new Set(pin2);

console.log(uniqueNumbers);
if (pin2.length !== uniqueNumbers.size) {
  console.log(false);
} else {
  console.log(true);
}

// console.log('12344466677'.length);
// const uniqueNumbers = new Set('12344466677');
// console.log(uniqueNumbers.size);
// console.log(uniqueNumbers);
