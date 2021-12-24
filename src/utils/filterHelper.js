/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
export function sortByPopularity(list) {
  const popularList = [];
  const otherList = [];
  list.forEach((item) => {
    item.popular ? popularList.push(item) : otherList.push(item);
  });

  return [...popularList, ...otherList];
}

export function sortByPrice(status, list) {
  if (status === 'up') {
    list.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (status === 'down') {
    list.sort((a, b) => Number(b.price) - Number(a.price));
  }

  return list;
}

export function filterByPrice(from, to, list) {
  return list.filter((item) => item.price >= from && item.price <= to);
}

export function filterByCategory(categoriesArray, list) {
  return list.filter((item) => categoriesArray.includes(item.category));
}

export function filterBySpecialization(specializationsArray, list) {
  return list.filter((item) => specializationsArray.includes(item.specialization));
}

export function filterBySize(sizesArray, list) {
  return list.filter((item) => item.sizes.filter((size) => sizesArray.includes(size)));
}
