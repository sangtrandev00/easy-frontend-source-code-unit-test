/// Call Back Fn

function main(onFinish) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }

  onFinish(sum);
}

function handleOnFinish(sum) {
  console.log('sum from 0 to 10 is: ', sum);
}

main(handleOnFinish);
