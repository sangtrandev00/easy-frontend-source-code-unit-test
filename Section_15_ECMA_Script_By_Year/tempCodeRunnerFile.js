// [[1,2,3],[4,5],[6,7]]
// [1,2,3,4,5,6,7]

function flatArr(array) {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr = newArr.concat(array[i]);
  }

  return newArr;
}

console.log(
  flatArr([
    [1, 2, 3],
    [4, 5],
    [6, 7],
  ])
);
