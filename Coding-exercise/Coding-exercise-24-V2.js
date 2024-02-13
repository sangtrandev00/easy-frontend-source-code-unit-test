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
  // your code here

  if (amount > FULL_AMOUNT) {
    return 'Insufficient balance from ATM';
  }

  if (!isMultipleOfNumber(amount)) {
    return 'Invalid balance';
  }

  let money = amount;

  //   case money << less than >= 1500000 VND

  while (money > 0) {
    if (money >= K500_VALUE) {
      piecesMoney = Math.floor(money / K500_VALUE);
      tranferObj['k500'] = piecesMoney;
      money = money % K500_VALUE;
    } else if (money >= K200_VALUE) {
      piecesMoney = Math.floor(money / K200_VALUE);
      tranferObj['k200'] = piecesMoney;
      money = money % K200_VALUE;
    } else if (money >= K100_VALUE) {
      piecesMoney = Math.floor(money / K100_VALUE);
      tranferObj['k100'] = piecesMoney;
      money = money % K100_VALUE;
    } else if (money >= K50_VALUE) {
      piecesMoney = Math.floor(money / K50_VALUE);
      tranferObj['k50'] = piecesMoney;
      money = money % K50_VALUE;
    }
  }
  
  return tranferObj;
}


function withdrawV2(amount) {

    soTo500 = amount / K500_VALUE;
    if(soTo500 > 0 && soTo500 <=2) {
        piecesMoney = Math.floor(money / K500_VALUE);
        tranferObj['k500'] = piecesMoney;

    } 
    if(soTo500 > 2) {
        tranferObj['k500'] = 2;
        tienConLai = amount - K500_VALUE * 2;
    }

    if()

}