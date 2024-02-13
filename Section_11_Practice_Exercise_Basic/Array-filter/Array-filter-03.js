export function generateFibonaci(n) {
  if (typeof n !== 'number') {
    return [];
  }

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
    Fn_1 = Fn;
  } while (true);

  return fiboList;
}

// console.log(generateFibonaci(5));
// console.log(generateFibonaci(10));
