import { hasFreeShip } from './Array-check-08';

describe('hasFreeShip() --', () => {
  test('should return false if productList is not an arr', () => {
    expect(hasFreeShip('string', 100)).toBe(false);
    expect(hasFreeShip(true, 100)).toBe(false);
    expect(hasFreeShip(123, 120)).toBe(false);
    expect(hasFreeShip([], 120)).toBe(false);
  });

  test('should return false if an productList doesnot have freeship and price price less than real price parameter', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
        ],
        1200000
      )
    ).toBe(false);
  });

  test('should return true if arr contains at least a truthy value', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
        ],
        10000000
      )
    ).toBe(true);
  });
});
