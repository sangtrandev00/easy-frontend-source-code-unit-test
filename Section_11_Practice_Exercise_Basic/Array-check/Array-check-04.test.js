import { hasTruthy, hasTruthyV2, hasTruthyV3, hasTruthyV4, hasTruthyV5 } from './Array-check-04';

describe('hasTruthy() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(hasTruthy('string')).toBe(false);
    expect(hasTruthy(undefined)).toBe(false);
    expect(hasTruthy({})).toBe(false);
    expect(hasTruthy(true)).toBe(false);
    expect(hasTruthy(123)).toBe(false);
  });

  test('should return false if an arr does not have  any truthy value', () => {
    expect(hasTruthy([])).toBe(false);
    expect(hasTruthy([false, ''])).toBe(false);
  });

  test('should return true if arr contains at least a truthy value', () => {
    expect(hasTruthy([false, 1234])).toBe(true);
  });

  //   test('should return .....', () => {
  //     expect(hasTruthy()).toBe();
  //   });
});

describe('hasTruthyV2() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(hasTruthyV2('string')).toBe(false);
    expect(hasTruthyV2(undefined)).toBe(false);
    expect(hasTruthyV2({})).toBe(false);
    expect(hasTruthyV2(true)).toBe(false);
    expect(hasTruthyV2(123)).toBe(false);
  });

  test('should return false if an arr does not have  any truthy value', () => {
    expect(hasTruthyV2([])).toBe(false);
    expect(hasTruthyV2([false, ''])).toBe(false);
  });

  test('should return true if arr contains at least a truthy value', () => {
    expect(hasTruthyV2([false, 1234])).toBe(true);
  });
});

// version 3
describe('hasTruthyV3() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(hasTruthyV3('string')).toBe(false);
    expect(hasTruthyV3(undefined)).toBe(false);
    expect(hasTruthyV3({})).toBe(false);
    expect(hasTruthyV3(true)).toBe(false);
    expect(hasTruthyV3(123)).toBe(false);
  });

  test('should return false if an arr does not have  any truthy value', () => {
    expect(hasTruthyV3([])).toBe(false);
    expect(hasTruthyV3([false, ''])).toBe(false);
  });

  test('should return true if arr contains at least a truthy value', () => {
    expect(hasTruthyV3([false, 1234])).toBe(true);
  });
});

//   version 4

describe('hasTruthyV4() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(hasTruthyV4('string')).toBe(false);
    expect(hasTruthyV4(undefined)).toBe(false);
    expect(hasTruthyV4({})).toBe(false);
    expect(hasTruthyV4(true)).toBe(false);
    expect(hasTruthyV4(123)).toBe(false);
  });

  test('should return false if an arr does not have  any truthy value', () => {
    expect(hasTruthyV4([])).toBe(false);
    expect(hasTruthyV4([false, ''])).toBe(false);
  });

  test('should return true if arr contains at least a truthy value', () => {
    expect(hasTruthyV4([false, 1234])).toBe(true);
  });
});

//   version 5

describe('hasTruthyV5() --', () => {
  test('should return false if arr is not an arr', () => {
    expect(hasTruthyV5('string')).toBe(false);
    expect(hasTruthyV5(undefined)).toBe(false);
    expect(hasTruthyV5({})).toBe(false);
    expect(hasTruthyV5(true)).toBe(false);
    expect(hasTruthyV5(123)).toBe(false);
  });

  test('should return false if an arr does not have  any truthy value', () => {
    expect(hasTruthyV5([])).toBe(false);
    expect(hasTruthyV5([false, ''])).toBe(false);
  });

  test('should return true if arr contains at least a truthy value', () => {
    expect(hasTruthyV5([false, 1234])).toBe(true);
  });
});
