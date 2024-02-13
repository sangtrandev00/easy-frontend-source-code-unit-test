export function hasAlice(studentList) {
  if (studentList.length === 0) {
    return false;
  }

  if (!Array.isArray(studentList)) {
    return false;
  }

  return studentList.some(
    (student) => student.gender === 'female' && student.name.toLowerCase() === 'alice'
  );
}

function hasAliceV2(studentList) {
  if (studentList.length === 0) {
    return false;
  }

  if (!Array.isArray(studentList)) {
    return false;
  }

  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].gender === 'female' && student[i].name.toLowerCase === 'alice') {
      return true;
    }
  }

  return false;
}

function hasAliceV3(studentList) {
  if (studentList.length === 0) {
    return false;
  }

  if (!Array.isArray(studentList)) {
    return false;
  }

  let flag = 0;
  studentList.forEach((student) => {
    if (student.name.toLowerCase === 'alice' && student.gender === 'female') {
      flag += 1;
    }
  });

  return flag > 0;
}

function hasAliceV4(studentList) {
  if (studentList.length === 0) {
    return false;
  }

  if (!Array.isArray(studentList)) {
    return false;
  }

  const foundStudent = studentList.find((student) => {
    return student.name.toLowerCase === 'alice' && student.gender === 'female';
  });

  return foundStudent === undefined;
}

function hasAliceV5(studentList) {
  if (studentList.length === 0) {
    return false;
  }

  if (!Array.isArray(studentList)) {
    return false;
  }

  let flag = studentList.findIndex((student) => {
    return student.name.toLowerCase === 'alice' && student.gender === 'female';
  });

  return flag === -1;
}
