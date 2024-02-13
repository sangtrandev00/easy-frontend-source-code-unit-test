export function findProductByCode(productList, code) {
  if (productList.length === 0) {
    return undefined;
  }

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].code === code) {
      return i;
    }
  }

  return -1;
}
