function isUrl(url) {
  const isStartWith =
    url.startsWith('http') ||
    url.startsWith('https') ||
    url.startsWith('ws') ||
    url.startsWith('wss');
  const isContain = url.endsWith('.com') || url.endsWith('.com.vn') || url.endsWith('.vn');

  let indexDomain;
  if (url.endsWith('.com')) indexDomain = url.indexOf('.com');
  else if (url.endsWith('.com.vn')) indexDomain = url.indexOf('.com.vn');
  else if (url.endsWith('.vn')) indexDomain = url.indexOf('.vn');

  const beforeDomainLength = url.substring(url.indexOf('//') + 2, indexDomain).length;
  const isRightFormat = beforeDomainLength >= 3;
  return isRightFormat && isContain && isStartWith ? true : false;
}

export function findLastUrl(strList) {
  if (strList.length === 0) {
    return undefined;
  }

  strList = strList.filter((str) => isUrl(str));

  return strList.length > 0 ? strList[strList.length - 1] : undefined;
}
