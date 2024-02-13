import { findAllIphones } from './Array-filter-09';

describe('findAllIphones() --', () => {
  test('Should return list of obj final if find match with requirement', () => {
    const productList = [
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ];
    expect(findAllIphones(productList)).toEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });

  test('Should return undefined if para is not valid', () => {
    expect(findAllIphones([])).toEqual(undefined);
  });
});
