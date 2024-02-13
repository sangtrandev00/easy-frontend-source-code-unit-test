export function findProductHavingFreeShip(productList) {
  if (productList.length === 0) {
    return undefined;
  }

  for (let i = 0; i < productList.length; i++) {
    if (productList[i].isFreeShip) {
      return productList[i];
    }
  }

  return undefined;
}

// const productList = [
//   { id: 1, name: 'IPhone 5', isFreeShip: false },
//   { id: 2, name: 'IPhone X', isFreeShip: true },
//   { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
// ];

// console.log(findProductHavingFreeShip(productList));
