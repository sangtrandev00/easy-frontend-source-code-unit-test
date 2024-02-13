export function remove(arr, k, n) {
  if (arr.length === 0) {
    return undefined;
  }

  if (k < 0 || k >= arr.length) {
    return arr;
  } else {
    arr.splice(k, n);
  }

  if (n === null || n === undefined) {
    return (arr = arr.slice(0, k));
  }

  if (n === null || (n === undefined && k === 0)) {
    return [];
  }

  return arr;
}

// console.log(remove([1, 2, 3], -1, 10));
// console.log(remove([1, 2, 3], 3, 10));
// console.log(remove([1, 2, 3], 1, 2));
// console.log(remove([1, 2, 3], 0));
// console.log(remove([1, 2, 3], 2));
