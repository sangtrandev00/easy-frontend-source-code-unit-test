const classifyStudentV3 = require('../Section005/05-09-main-practice');

describe('classifyStudentV3() --- ', () => {
  test('classify student with >=8 is excelence', () => {
    expect(classifyStudentV3(9.4)).toBe('Excelence');
    expect(classifyStudentV3(8.7)).toBe('Excelence');
  });
  test('classify student with >=7 is Good', () => {
    expect(classifyStudentV3(7)).toBe('Good');
    expect(classifyStudentV3(7.5)).toBe('Good');
  });

  test('classify student with 6.4 is not good', () => {
    expect(classifyStudentV3(6.4)).toBe('Not good');
  });

  test('classify student with 0 1 2 3 is bad', () => {
    [0, 1, 2, 3].forEach((number) => {
      expect(classifyStudentV3(number)).toBe('Bad');
    });
  });

  test('classify student with > 10 or < 0 is null', () => {
    expect(classifyStudentV3(11)).toBe(null);
    expect(classifyStudentV3(-1)).toBe(null);
  });
});
