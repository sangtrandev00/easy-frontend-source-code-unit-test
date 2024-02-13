// tra ve day so fibonacci nho hon n using recursion.

// n o day la vi tri.
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  //   let Fn = Fn_1 + Fn_2;
  //   let Fn_2 = Fn_1;
  //   let Fn_1 = Fn;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));


