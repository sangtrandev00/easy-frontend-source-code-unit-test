import { calcCartTotal } from './Array-sum-04';

describe('calcCartTotal() --', () => {
  test('Should return sum of price in cart by quantity', () => {
    const cartItemList = [
      { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
      { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
    ];
    expect(calcCartTotal(cartItemList)).toBe(250000);
    expect(calcCartTotal([])).toBe(0);
  });
});
