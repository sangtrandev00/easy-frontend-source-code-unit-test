export function hasFalsy(arr) {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) return false;

  return arr.some((value) => Boolean(value) === false);
}
