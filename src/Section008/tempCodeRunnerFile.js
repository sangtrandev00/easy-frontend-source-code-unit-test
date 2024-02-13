function isEqual(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

const obj1 = {
  name: 'Tran Nhat Sang',
  id: 123,
};

const obj2 = {
  noName: 'Tran Nhat Sang',
  id2: 123,
};

console.log(isEqual(obj1, obj2));
