import { countPositiveEvenNumbers } from './Array-count-01';

describe('countPositiveEvenNumbers() --', () => {
  test('Should return 0 if positive number is not in number list', () => {
    expect(countPositiveEvenNumbers([-2, -1])).toEqual(0);
  });

  test('Should number of even postive number in array', () => {
    expect(countPositiveEvenNumbers([-2, -1, 1, 2, 4])).toEqual(2);
  });
});
