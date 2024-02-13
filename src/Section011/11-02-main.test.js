const SumSnV1 = require('./11-02-main');

describe('SumSnV1() --', () => {
  test('sshould return -1 if n is not a number', () => {
    expect(SumSnV1({})).toBe(-1);
    expect(SumSnV1([])).toBe(-1);
    expect(SumSnV1()).toBe(-1);
    expect(SumSnV1('hello')).toBe(-1);
  });

  test('should turn float n into integer n the same!', () => {
    expect(SumSnV1(9.1111)).toBe(SumSnV1(9));
    expect(SumSnV1(4.6)).toBe(SumSnV1(4));
  });

  test('should return 1 if n === 1', () => {
    expect(SumSnV1(1)).toBe(1);
  });

  test('should return -1 if <=1', () => {
    expect(SumSnV1(-1)).toBe(-1);
  });

  test('Should return the result is 10 if n == 4', () => {
    expect(SumSnV1(4)).toBe(10);
  });
});

const SumSnV2 = require('./11-02-main');

describe('SumSnV2() --', () => {
  test('sshould return -1 if n is not a number', () => {
    expect(SumSnV2({})).toBe(-1);
    expect(SumSnV2([])).toBe(-1);
    expect(SumSnV2()).toBe(-1);
    expect(SumSnV2('hello')).toBe(-1);
  });

  test('should turn float n into integer n the same!', () => {
    expect(SumSnV2(9.1111)).toBe(SumSnV2(9));
    expect(SumSnV2(4.6)).toBe(SumSnV2(4));
  });

  test('should return 1 if n === 1', () => {
    expect(SumSnV2(1)).toBe(1);
  });

  test('should return -1 if <=1', () => {
    expect(SumSnV2(-1)).toBe(-1);
  });

  test('Should return the result is 10 if n == 4', () => {
    expect(SumSnV2(4)).toBe(10);
  });
});
