function isEqual(obj1, obj2) {
  if ((obj1 === obj2) === {}) {
    return true;
  }

  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let i = 0; i < obj1.length; i++) {
      if (obj1[i] !== obj2[i]) {
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
  name2: 'Tran Nhat Sang',
  id2: 123,
};

console.log(isEqual(obj1, obj2));
