function isEmail(email) {
  const isContain = email.indexOf('@') > 0 && email.indexOf('@') < email.length - 1;

  const isEndWith = email.endsWith('.com') || email.endsWith('.vn') || email.endsWith('.com.vn');
  const before_email = email.substring(0, email.indexOf('@')).length;
  const after_email = email.substring(email.indexOf('@') + 1, email.indexOf('.')).length;
  const isRightFormat = before_email >= 3 && after_email >= 3;
  return isContain && isRightFormat && isEndWith ? true : false;
}

// console.log(isEmail('nhatsang0101@gmail.com'));
// console.log(isEmail('nhatsang0101@gmail.com.vn'));
// console.log(isEmail('nhatsang0101@gmail.vn'));
// console.log(isEmail('nhatsang0101@gmail'));
// console.log(isEmail('abc@east.frontend'));
export function findFirstEmail(strList) {
  if (strList.length === 0) {
    return undefined;
  }
  for (let i = 0; i < strList.length; i++) {
    if (isEmail(strList[i])) {
      return strList[i];
    }
  }
  return undefined;
}

// console.log(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com']));
