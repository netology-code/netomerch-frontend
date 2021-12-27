/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
export function sortByPopularity(list, status = null) {
  let popularList = [];
  let otherList = [];
  list.forEach((item) => {
    item.popular ? popularList.push(item) : otherList.push(item);
  });

  if (status === 'up') {
    popularList = sortByPrice('up', popularList);
    otherList = sortByPrice('up', otherList);
  }

  if (status === 'down') {
    popularList = sortByPrice('down', popularList);
    otherList = sortByPrice('down', otherList);
  }

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
  return list.filter((item) => Number(item.price) >= from && Number(item.price) <= to);
}

export function filterByCategory(categoriesArray, list) {
  return list.filter((item) => categoriesArray.includes(item.category));
}

export function filterBySpecialization(specializationsArray, list) {
  return list.filter((item) => specializationsArray.includes(item.specialization));
}

export function filterBySize(sizesArray, list) {
  return list.filter((item) => item.size.some((size) => sizesArray.includes(size)));
}
