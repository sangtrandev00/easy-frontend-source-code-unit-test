import { findSecondLargestNumber, findSecondLargestNumberV2 } from './Array-find-05';

describe('findSecondLargestNumber() --', () => {
  test('should return undefined if numberList is empty or number has only one number', () => {
    expect(findSecondLargestNumber([])).toBe(undefined);
    expect(findSecondLargestNumber([2])).toBe(undefined);
    expect(findSecondLargestNumber([-2])).toBe(undefined);
  });

  test('should return second largest number if  word in array fullfill the condition', () => {
    expect(findSecondLargestNumber([4, 16, 36, 40])).toBe(36);
    expect(findSecondLargestNumber([4, 3, 12])).toBe(4);
    expect(findSecondLargestNumber([1, 3, 7])).toBe(3);
  });
});

describe('findSecondLargestNumberV2() --', () => {
  test('should return undefined if numberList is empty or number has only one number', () => {
    expect(findSecondLargestNumberV2([])).toBe(undefined);
    expect(findSecondLargestNumberV2([2])).toBe(undefined);
    expect(findSecondLargestNumberV2([-2])).toBe(undefined);
  });

  test('should return second largest number if  word in array fullfill the condition', () => {
    expect(findSecondLargestNumberV2([4, 16, 36, 40])).toBe(36);
    expect(findSecondLargestNumberV2([4, 3, 12])).toBe(4);
    expect(findSecondLargestNumberV2([1, 3, 7])).toBe(3);
  });
});
