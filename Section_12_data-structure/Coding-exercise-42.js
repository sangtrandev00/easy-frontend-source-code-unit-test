function getUniqueWords(sentence) {
  // your code here ...

  if (sentence.length === 0) {
    return [];
  }

  const arrWords = sentence.split(' ').filter((word) => word !== '');
  const arrWordSets = new Set(arrWords);
  return [...arrWordSets];
}

console.log(getUniqueWords('tran nhat     sang sang sang hi hi'));
