export function findAllIphones(productList) {
  if (productList.length === 0) {
    return undefined;
  }

  const newProductList = productList.filter(
    (product) => product.name.toLowerCase().includes('iphone') && product.amount > 0
  );
  return newProductList.length > 0 ? newProductList : undefined;
}
