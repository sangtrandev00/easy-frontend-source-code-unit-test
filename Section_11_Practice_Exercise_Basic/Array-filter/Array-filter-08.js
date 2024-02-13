export function findAllProducts(productList) {
  if (productList.length === 0) {
    return undefined;
  }

  productList = productList.filter((product) => product.isFreeShip);
  return productList.length > 0 ? productList : undefined;
}
