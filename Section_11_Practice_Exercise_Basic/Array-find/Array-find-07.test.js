import { findFirstEmail } from './Array-find-07';

describe('findFirstEmail() --', () => {
  test('should return undefined if can not find positive number', () => {
    expect(findFirstEmail([])).toBe(undefined);
    expect(findFirstEmail(['abc@easy.frontend'])).toBe(undefined);
  });

  test('should return email correct if item contain invalid email', () => {
    expect(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
  });
});
