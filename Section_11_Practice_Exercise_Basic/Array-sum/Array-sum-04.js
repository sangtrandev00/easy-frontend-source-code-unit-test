export function calcCartTotal(cartItemList) {
  if (cartItemList.length === 0) {
    return 0;
  }

  return cartItemList.reduce((sum, item) => {
    const itemTotal = item.product.price * item.quantity;

    return sum + itemTotal;
  }, 0);

  // let sum = 0;
  // cartItemList.forEach((item) => {
  //   sum += item.product.price * item.quantity;
  // });
  // return sum;
}

const cartItemList = [
  { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
  { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
];

console.log(cartItemList[0].quantity + cartItemList[0].product.price);
console.log(cartItemList[1].product.price * cartItemList[1].quantity);

console.log(calcCartTotal(cartItemList));
