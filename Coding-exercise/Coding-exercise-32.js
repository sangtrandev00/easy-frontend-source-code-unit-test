function calcCartTotal(cartItemList) {
  // your code here

  if (!Array.isArray(cartItemList)) {
    return 0;
  }
  if (cartItemList.length === 0) {
    return 0;
  }
  return cartItemList.reduce((sum, totalItem) => {
    sum = sum + totalItem.product.price * totalItem.quantity;
    return sum;
  }, 0);
}

const cartItemList = [
  { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
  { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
];

console.log(calcCartTotal(cartItemList));
