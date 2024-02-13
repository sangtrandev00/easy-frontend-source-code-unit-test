import { findAllProducts } from './Array-filter-08';

describe('findAllProducts() --', () => {
  test('should return list of obj final if find match with requirement', () => {
    const productList = [
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
      { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
    ];
    expect(findAllProducts(productList)).toEqual([
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    ]);
  });

  test('Should return undefined if para is not valid', () => {
    expect(findAllProducts([])).toEqual(undefined);
  });
});
