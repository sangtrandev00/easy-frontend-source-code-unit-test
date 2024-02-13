// PLEASE USE ALL OF THESE CONSTANTS IN YOUR CODE
// DO NOT USE HARDCODE NUMBER IN YOUR CODE
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;
const FULL_AMOUNT = 8000000;

function isMultipleOfNumber(money) {
  if (money % BASE_UNIT == 0) {
    return true;
  }

  return false;
}

function withdraw(amount) {
  if (amount > FULL_AMOUNT) {
    return 'Insufficient balance from ATM';
  }

  if (!isMultipleOfNumber(amount)) {
    return 'Invalid balance';
  }

  const objMoney = {
    k500: 0,
    k200: 0,
    k100: 0,
    k50: 0,
  };

  let remaining = amount;

  // quantity of 500 value
  let q500 =
    remaining > K500_VALUE * K500_QUANTITY ? K500_QUANTITY : Math.floor(remaining / K500_VALUE);
  objMoney.k500 = q500;
  remaining -= q500 * K500_VALUE;

  // quantity of 200 value
  let q200 =
    remaining > K200_VALUE * K200_QUANTITY ? K200_QUANTITY : Math.floor(remaining / K200_VALUE);
  objMoney.k200 = q200;
  remaining -= q200 * K200_VALUE;

  // quantity of 100 value
  let q100 =
    remaining > K100_VALUE * K100_QUANTITY ? K100_QUANTITY : Math.floor(remaining / K100_VALUE);
  objMoney.k100 = q100;
  remaining -= q100 * K100_VALUE;

  // quantity of 50 value
  let q50 = remaining > K50_VALUE * K50_QUANTITY ? K50_QUANTITY : Math.floor(remaining / K50_VALUE);
  objMoney.k50 = q50;
  remaining -= q50 * K50_VALUE;

  return objMoney;
}

console.log(withdraw(850000));
console.log(withdraw(200000));
console.log(withdraw(7000000));
