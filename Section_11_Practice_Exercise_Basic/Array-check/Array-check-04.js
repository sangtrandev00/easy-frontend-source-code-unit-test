export function hasTruthy(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return false;
  }

  return arr.some((value) => Boolean(value) === true);
}

export function hasTruthyV2(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return false;
  }

  return !arr.every((value) => Boolean(value) === false);
}

export function hasTruthyV3(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      return true;
    }
  }
  return false;
}

export function hasTruthyV4(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return false;
  }

  let count = 0;
  arr.forEach((value) => {
    if (Boolean(value)) {
      count++;
    }
  });

  return count >= 1 ? true : false;
}

export function hasTruthyV5(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return false;
  }

  return arr.filter((value) => Boolean(value)).length >= 1 ? true : false;
}
