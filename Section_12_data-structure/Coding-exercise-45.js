const PIN_LENGTH = 6;

function isEnoughLength(pin) {
  return pin.toString().length === PIN_LENGTH;
}

function isFullNumber(pin) {
  return pin.every((char) => typeof char === 'number');
}

// day so xuat hien qua 2 lan la sai
function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }

  numberList = numberList.filter((num) => num !== '');

  const uniqueNumbers = new Set(numberList);
  return [...uniqueNumbers];
}

// console.log(uniqueNumbers([1, , 2, 2, 3, 4, 5]));

function isUniqueNumberList(pin) {
  const numberList = pin.toString().split('');

  if (numberList.length === uniqueNumbers(numberList).length) {
    return true;
  } else {
    return false;
  }
}

// console.log(isUniqueNumberList(12345));
// console.log(isUniqueNumberList(1297345));
// console.log(isUniqueNumberList(1111333444));
// console.log(isUniqueNumberList(6667888));

// chuoi so tang dan hoac giam dan lien tiep

function isIncreasingNumberV1(n) {
  const numberArr = n.toString().split('');
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] >= numberArr[i + 1]) {
      return false;
    }
  }

  return true;
}

function isDescreasingNumber(n) {
  const numberArr = n.toString().split('');
  for (let i = 0; i < numberArr.length - 1; i++) {
    if (numberArr[i] <= numberArr[i + 1]) {
      return false;
    }
  }

  return true;
}

// console.log(isDescreasingNumber(54321));

function isIncreasingNumberByDistance(n, x) {
  if (isIncreasingNumberV1(n) === false) {
    return false;
  }
  const numberArr = n.toString();

  for (let i = 0; i < numberArr.length - 1; i++) {
    if (Number(numberArr[i + 1]) - Number(numberArr[i]) !== x) {
      return false;
    }
  }

  return true;
}

function isDescreasingNumberByDistance(n, x) {
  if (isDescreasingNumber(n) === false) {
    return false;
  }
  const numberArr = n.toString();

  for (let i = 0; i < numberArr.length - 1; i++) {
    if (Number(numberArr[i]) - Number(numberArr[i + 1]) !== x) {
      return false;
    }
  }

  return true;
}

// console.log(isDescreasingNumberByDistance(54321, 1));

function isDescreasingOrIncreasingNumberList(pin) {
  if (isIncreasingNumberByDistance(pin, 1) || isDescreasingNumberByDistance(pin, 1)) {
    return true;
  } else {
    return false;
  }
}

// console.log(isDescreasingOrIncreasingNumberList(12345));
// console.log(isDescreasingOrIncreasingNumberList(54321));
// console.log(isDescreasingOrIncreasingNumberList(124579));
// console.log(isDescreasingOrIncreasingNumberList(65321));

function isValidPIN(pin) {
  // your code here ...

  if (typeof pin !== 'number') {
    return false;
  }

  const flag =
    isEnoughLength(pin) &&
    isFullNumber(pin) &&
    isUniqueNumberList(pin) &&
    !isDescreasingOrIncreasingNumberList(pin);
  return flag;
}
