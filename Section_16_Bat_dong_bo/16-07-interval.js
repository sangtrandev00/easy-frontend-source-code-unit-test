// function countdown(seconds) {
//   let currentSeconds = seconds;
//   const intervalId = setInterval(() => {
//     console.log(currentSeconds);
//     currentSeconds--;
//     if (currentSeconds === 0) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

// countdown(10);

function test() {
  let i = 0;
  setTimeout(function () {
    func(i++);
  });
}
