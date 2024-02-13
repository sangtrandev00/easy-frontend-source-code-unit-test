// using object
function buildCategoryMapV1(categoryList) {
  // your code here
  if (!Array.isArray(categoryList)) {
    return {};
  }

  if (categoryList.length === 0) {
    return {};
  }

  const objCategories = {};
  categoryList.forEach((category) => {
    objCategories[category.id] = category;
  });

  return objCategories;
}

// using Map
function buildCategoryMapV2(categoryList) {
  // your code here

  if (!Array.isArray(categoryList) || categoryList.length === 0) {
    return new Map();
  }

  return categoryList.reduce((map, category) => {
    // map[category.id] = category;
    map.set(category.id, category);
    return map;
  }, new Map());
}

categoryList = [
  { id: 1, name: 'iphone' },
  { id: 2, name: 'macbook' },
];

console.log('build category version 1: ', buildCategoryMapV1(categoryList));

console.log('build category version 2: ', buildCategoryMapV2({}));
