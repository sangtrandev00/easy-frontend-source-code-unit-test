function fibonaciListArr(n) {
  const fiboList = [0, 1];
  let Fn_1 = 1;
  let Fn_2 = 0;
  let Fn;
  do {
    Fn = Fn_1 + Fn_2; // 2 3
    if (Fn >= n) {
      break;
    }
    fiboList.push(Fn);
    Fn_2 = Fn_1;
    Fn_1 = Fn; // 1 2
  } while (true);
  return fiboList;
}

// console.log(fibonaciListArr(100));
// console.log(fibonaciListArr(10));

export function hasFibonaciNumber(numberList) {
  if (!Array.isArray(numberList)) {
    return false;
  }

  if (numberList.length === 0) {
    return false;
  }

  const fibonaciList = fibonaciListArr(100);

  for (let i = 0; i < numberList.length; i++) {
    for (let j = 0; j < fibonaciList.length; j++) {
      if (numberList[i] === fibonaciList[j]) {
        return true;
      }
    }
  }
  return false;
}

// console.log(hasFibonaciNumber([1, 3]));
// console.log(hasFibonaciNumber([]));
// console.log(hasFibonaciNumber([33, 36]));
