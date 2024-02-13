import { findProductByCode } from './Array-find-10';

describe('findProductByCode() --', () => {
  test('should return index of array items if code == code in array', () => {
    const productList = [
      { id: 1, code: 'ip01', name: 'IPhone 16' },
      { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
    ];
    expect(findProductByCode(productList, 'ip01')).toBe(0);
  });

  test('should return -1 if can not find code in productList', () => {
    const productList = [
      { id: 1, code: 'ip01', name: 'IPhone 16' },
      { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
    ];

    expect(findProductByCode(productList, 'ip03')).toBe(-1); // -1
  });

  test('Should return undefined if para is not valid', () => {
    expect(findProductByCode([], 'ip03')).toBe(undefined); // -1
  });
});
