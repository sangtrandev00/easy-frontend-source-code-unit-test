import { fillPath } from './String07';

describe('fillPath() -- V1', () => {
  test('should return "" if path and params is  empty }', () => {
    expect(fillPath('', {})).toMatch('');
  });

  test('should return address like format below this example', () => {
    expect(
      fillPath('/products/:productId', {
        productId: 123,
      })
    ).toMatch('/products/123');

    expect(
      fillPath('/categories/:categoryId/products/:productId', {
        categoryId: 1,
        productId: 2,
      })
    ).toMatch('/categories/1/products/2');

    expect(
      fillPath('/categories/:categoryId/products/:productId', {
        productId: 2,
      })
    ).toMatch('/categories/:categoryId/products/2');
  });
});
