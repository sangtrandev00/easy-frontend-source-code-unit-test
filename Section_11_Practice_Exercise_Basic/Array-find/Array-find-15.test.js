import { findFirstIPhone } from './Array-find-15';

describe('findFirstIPhone() --', () => {
  test('should return obj final if find match with requirement', () => {
    const productList = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'IPHONE X' },
      { id: 3, name: 'iPhone 12 Pro' },
    ];
    expect(findFirstIPhone(productList)).toEqual({
      id: 2,
      name: 'IPHONE X',
    });
  });

  test('Should return undefined if para is not valid', () => {
    expect(findFirstIPhone([])).toEqual(undefined);
  });
});
