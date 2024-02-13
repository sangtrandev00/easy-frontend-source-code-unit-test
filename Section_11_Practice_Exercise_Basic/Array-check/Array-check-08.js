export function hasFreeShip(productList, price) {
  if (productList.length === 0) {
    return false;
  }

  if (!Array.isArray(productList)) {
    return false;
  }

  return productList.some((product) => product.price < price);
}
