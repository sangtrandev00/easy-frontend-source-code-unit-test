// bai tap 1.

let x = 10;

function checkNumber1(x) {
  if (x > 0) {
    console.log(x + 'la so duong!');
  }
}

function checkNumber2(x) {
  if (x > 0 && x % 2 == 0) {
    console.log(x + 'la so duong chan!');
  }
}

// checkNumber2(4);

function checkNumber3(x) {
  if (x > 10 && x % 2 == 0) {
    console.log(x + 'la so duong chan va lon hon 10');
  }
}

function checkNumber4(x) {
  if (x % 2 == 0 && (x % 5 == 0) & (x > 10)) {
    console.log(x + 'la so duong chan chia het cho 5 va lon hon 10!');
  }
}

function checkNumber5(x) {
  if ((x % 2 == 0 && x > 0) || (x % 2 != 0 && x < 0)) {
    console.log(x + 'la so am le hoac la so duong chan!');
  }
}

function checkNumber5Method2(x) {
  const isEvenPositive = x % 2 === 0 && x > 0;
  const isOddNegative = x % 2 !== 0 && x < 0;
  if (isEvenPositive || isOddNegative) {
    console.log(x + 'la so am le hoac la so duong chan!');
  }
}

module.exports = checkNumber1;
module.exports = checkNumber2;
module.exports = checkNumber3;
module.exports = checkNumber4;
module.exports = checkNumber5;

checkNumber2(3);
checkNumber5Method2(3);
