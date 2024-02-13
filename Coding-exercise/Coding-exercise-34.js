function chunkArray(array, size) {
  // your code here ...

  if (!Array.isArray(array) || size <= 0) {
    return [];
  }

  const arrLength = array.length; // VD: 8
  // chunk number size (=== size ( VD: 3))
  const chunkNumber = // 2
    array.length % size === 0 ? arrLength / size : Math.floor(arrLength / size) + 1;
  const remainChunkSize = arrLength % size; //2
  let i = 0;
  let start = 0;
  const mainArr = [];
  while (i < chunkNumber) {
    let newArr = [];
    newArr =
      remainChunkSize !== 0 && i === chunkNumber - 1
        ? array.slice(start, start + remainChunkSize)
        : array.slice(start, start + size);
    mainArr.push(newArr);
    start += size;
    i++;
  }
  if (mainArr.length > 20) {
    throw new Error('Too many chunks');
  }

  return mainArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(chunkArray([1, 2, 3], 2));
console.log(chunkArray([1, 2, 3], 1));
console.log(chunkArray([1, 2, 3], 3));
