export function findFirstIPhone(productList) {
  if (productList.length === 0) {
    return undefined;
  }

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes('iphone')) {
      return productList[i];
    }
  }

  return undefined;
}
