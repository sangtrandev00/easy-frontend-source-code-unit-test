import {
  isIncreasingNumberV1,
  isIncreasingNumberV2,
  isIncreasingNumberV3,
  isIncreasingNumberV4,
  isIncreasingNumberV5,
  isIncreasingNumberV6,
} from './11-03-main';

describe('Test isIncreasingNumber ', () => {
  test('should return fasle if n > 1000000 or n <=0', () => {
    expect(isIncreasingNumberV1(0)).toBe(false);
    expect(isIncreasingNumberV1(1000000001)).toBe(false);
  });

  test('should return false if n has number of letter is less than 2', () => {
    expect(isIncreasingNumberV1(1)).toBe(false);
  });
  test('should return false if right number greater or equal than left number of n', () => {
    expect(isIncreasingNumberV1(32)).toBe(false);
    expect(isIncreasingNumberV1(164)).toBe(false);
    expect(isIncreasingNumberV1(80992)).toBe(false);
    expect(isIncreasingNumberV1(22222)).toBe(false);
  });

  test('Should return true if n is an inscreasing number', () => {
    expect(isIncreasingNumberV1(12345)).toBe(true);
  });
});

describe('Test isIncreasingNumberV2 ', () => {
  test('should return fasle if n > 1000000 or n <=0', () => {
    expect(isIncreasingNumberV2(0)).toBe(false);
    expect(isIncreasingNumberV2(1000000001)).toBe(false);
  });

  test('should return false if n has number of letter is less than 2', () => {
    expect(isIncreasingNumberV2(1)).toBe(false);
  });
  test('should return false if right number greater or equal than left number of n', () => {
    expect(isIncreasingNumberV2(32)).toBe(false);
    expect(isIncreasingNumberV2(164)).toBe(false);
    expect(isIncreasingNumberV2(80992)).toBe(false);
    expect(isIncreasingNumberV2(22222)).toBe(false);
  });

  test('Should return true if n is an inscreasing number', () => {
    expect(isIncreasingNumberV2(12345)).toBe(true);
  });
});

describe('Test isIncreasingNumberV3 ', () => {
  test('should return fasle if n > 1000000 or n <=0', () => {
    expect(isIncreasingNumberV3(0)).toBe(false);
    expect(isIncreasingNumberV3(1000000001)).toBe(false);
  });

  test('should return false if n has number of letter is less than 2', () => {
    expect(isIncreasingNumberV3(1)).toBe(false);
  });
  test('should return false if right number greater or equal than left number of n', () => {
    expect(isIncreasingNumberV3(32)).toBe(false);
    expect(isIncreasingNumberV3(164)).toBe(false);
    expect(isIncreasingNumberV3(80992)).toBe(false);
    expect(isIncreasingNumberV3(22222)).toBe(false);
  });
  test('Should return true if n is an inscreasing number', () => {
    expect(isIncreasingNumberV3(12345)).toBe(true);
  });
});

describe('Test isIncreasingNumberV4 ', () => {
  test('should return fasle if n > 1000000 or n <=0', () => {
    expect(isIncreasingNumberV4(0)).toBe(false);
    expect(isIncreasingNumberV4(1000000001)).toBe(false);
  });

  test('should return false if n has number of letter is less than 2', () => {
    expect(isIncreasingNumberV4(1)).toBe(false);
  });
  test('should return false if right number greater or equal than left number of n', () => {
    expect(isIncreasingNumberV4(32)).toBe(false);
    expect(isIncreasingNumberV4(164)).toBe(false);
    expect(isIncreasingNumberV4(80992)).toBe(false);
    expect(isIncreasingNumberV4(22222)).toBe(false);
  });

  test('Should return true if n is an inscreasing number', () => {
    expect(isIncreasingNumberV4(12345)).toBe(true);
  });
});

describe('Test isIncreasingNumberV5 ', () => {
  test('should return fasle if n > 1000000 or n <=0', () => {
    expect(isIncreasingNumberV5(0)).toBe(false);
    expect(isIncreasingNumberV5(1000000001)).toBe(false);
  });

  test('should return false if n has number of letter is less than 2', () => {
    expect(isIncreasingNumberV5(1)).toBe(false);
  });
  test('should return false if right number greater or equal than left number of n', () => {
    expect(isIncreasingNumberV5(32)).toBe(false);
    expect(isIncreasingNumberV5(164)).toBe(false);
    expect(isIncreasingNumberV5(80992)).toBe(false);
    expect(isIncreasingNumberV5(22222)).toBe(false);
  });

  test('Should return true if n is an inscreasing number', () => {
    expect(isIncreasingNumberV5(12345)).toBe(true);
  });
});
