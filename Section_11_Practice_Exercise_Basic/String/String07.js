export function fillPath(path, params) {
  if (path === '' || Object.is(params, {})) {
    return '';
  }

  const keysArr = Object.keys(params);
  const valuesArr = Object.values(params);
  //   let newPath = path;
  //   let finalPath = '';
  for (let i = 0; i < keysArr.length; i++) {
    if (path.includes(keysArr[i]) || path.includes(valuesArr[i])) {
      path = path.replace(':' + keysArr[i], valuesArr[i]);
    }
  }

  return path;
}
console.log(fillPath('/products/:productId', { productId: 123 }));
console.log(
  fillPath('/categories/:categoryId/products/:productId', {
    categoryId: 1,
    productId: 2,
  })
);

console.log(fillPath('/categories/:categoryId/products/:productId', { productId: 2 }));
