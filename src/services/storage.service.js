/* eslint-disable no-param-reassign */
const storageService = {
  get: (key) => (localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : []),
  set: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  add: (key, data) => {
    const cart = storageService.get(key);
    cart.push(data);
    storageService.set(key, cart);
  },
  changeQuantity: (key, id, quantity) => {
    const cart = storageService.get(key);
    cart.forEach((prod) => {
      if (prod.id === id) {
        prod.count = quantity;
      }
    });
    storageService.set(key, cart);
  },
  delete: (key, id) => {
    let cart = storageService.get(key);

    cart = cart.filter((prod) => prod.id !== id);
    storageService.set(key, cart);
  },
  clear: (key) => {
    localStorage.removeItem(key);
  },
};

export default storageService;
