import { findProductHavingFreeShip } from './Array-find-14';

describe('findProductHavingFreeShip() --', () => {
  test('should return obj final if find match with requirement', () => {
    const productList = [
      { id: 1, name: 'IPhone 5', isFreeShip: false },
      { id: 2, name: 'IPhone X', isFreeShip: true },
      { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
    ];
    expect(findProductHavingFreeShip(productList)).toEqual({
      id: 2,
      name: 'IPhone X',
      isFreeShip: true,
    });
  });

  test('Should return undefined if para is not valid', () => {
    expect(findProductHavingFreeShip([])).toEqual(undefined);
  });
});
