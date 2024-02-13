function filterProducts(productList) {
  // your code here

  if (productList.length === 0 || !Array.isArray(productList)) {
    return [];
  }

  return productList.filter((product) => product.price > 100000);
}
