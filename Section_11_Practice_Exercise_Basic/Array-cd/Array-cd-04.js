export function insert(numberList, newNumber) {
  numberList.push(newNumber);
  numberList.sort((a, b) => a - b);
  return numberList;
}
