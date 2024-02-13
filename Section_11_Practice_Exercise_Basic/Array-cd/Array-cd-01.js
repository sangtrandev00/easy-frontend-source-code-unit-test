export function insert(arr, newItem, k) {
  if (arr.length === 0) {
    return undefined;
  }

  if (k > arr.length) {
    arr.push(newItem);
  } else if (k <= 0) {
    arr.unshift(newItem);
  } else {
    arr.splice(k, 0, newItem);
  }

  return arr;
}
