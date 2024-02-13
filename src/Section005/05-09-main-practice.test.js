const classifyStudentV1 = require('./05-09-main-practice');
const classifyStudentV3 = require('./05-09-main-practice');
const classifyStudentV2 = require('./05-09-main-practice');
// describe('Classify student by their grade -- v1', () => {
//   test('should return Your mark is not correct from range 0 to 10 if mark is not from that range', () => {
//     expect(classifyStudentV1(11)).toBe('Your mark is not correct from range 0 to 10');
//     expect(classifyStudentV1(-2)).toBe('Your mark is not correct from range 0 to 10');
//   });

// });

// unit test for version 1
describe('classifyStudentV1() --- ', () => {
  test('classify student with >=8 is excelence', () => {
    expect(classifyStudentV1(9.4)).toBe('Excelence');
    expect(classifyStudentV1(8.7)).toBe('Excelence');
  });
  test('classify student with >=7 is Good', () => {
    expect(classifyStudentV1(7)).toBe('Good');
    expect(classifyStudentV1(7.5)).toBe('Good');
  });

  test('classify student with 6.4 is not good', () => {
    expect(classifyStudentV1(6.4)).toBe('Not good');
  });

  test('classify student with 0 1 2 3 is bad', () => {
    [0, 1, 2, 3].forEach((number) => {
      expect(classifyStudentV1(number)).toBe('Bad');
    });
  });

  test('classify student with > 10 or < 0 is null', () => {
    expect(classifyStudentV1(11)).toBe(null);
    expect(classifyStudentV1(-1)).toBe(null);
  });
});

// unit test for version 2
describe('classifyStudentV2() --- ', () => {
  test('classify student with >=8 is excelence', () => {
    expect(classifyStudentV2(9.4)).toBe('Excelence');
    expect(classifyStudentV2(8.7)).toBe('Excelence');
  });
  test('classify student with >=7 is Good', () => {
    expect(classifyStudentV2(7)).toBe('Good');
    expect(classifyStudentV2(7.5)).toBe('Good');
  });

  test('classify student with 6.4 is not good', () => {
    expect(classifyStudentV2(6.4)).toBe('Not good');
  });

  test('classify student with 0 1 2 3 is bad', () => {
    [0, 1, 2, 3].forEach((number) => {
      expect(classifyStudentV2(number)).toBe('Bad');
    });
  });

  test('classify student with > 10 or < 0 is null', () => {
    expect(classifyStudentV2(11)).toBe(null);
    expect(classifyStudentV2(-1)).toBe(null);
  });
});

//   unit test for version 3
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
