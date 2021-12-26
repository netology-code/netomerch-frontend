import httpService from '../services/http.service';
import storageService from '../services/storage.service';
import {
  FETCH_CATALOG_FAILURE,
  FETCH_CATALOG_START,
  FETCH_CATALOG_SUCCESS,
  FETCH_MAINPAGE_FAILURE,
  FETCH_MAINPAGE_START,
  FETCH_MAINPAGE_SUCCESS,
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_START,
  FETCH_ORDER_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PROMO_FAILURE,
  FETCH_PROMO_START,
  FETCH_PROMO_SUCCESS,
  UPDATE_CART,
} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const updateCart = () => ({
  type: UPDATE_CART,
});

export const fetchMainPageStart = () => ({
  type: FETCH_MAINPAGE_START,
});

export const fetchMainPageFailure = (error) => ({
  type: FETCH_MAINPAGE_FAILURE,
  payload: { error },
});

export const fetchMainPageSuccess = (data) => ({
  type: FETCH_MAINPAGE_SUCCESS,
  payload: { data },
});

export const fetchCatalogStart = () => ({
  type: FETCH_CATALOG_START,
});

export const fetchCatalogFailure = (error) => ({
  type: FETCH_CATALOG_FAILURE,
  payload: { error },
});

export const fetchCatalogSuccess = (data) => ({
  type: FETCH_CATALOG_SUCCESS,
  payload: { data },
});

export const fetchProductStart = () => ({
  type: FETCH_PRODUCT_START,
});

export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: { error },
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: { data },
});

export const fetchOrderStart = () => ({
  type: FETCH_ORDER_START,
});

export const fetchOrderFailure = (error) => ({
  type: FETCH_ORDER_FAILURE,
  payload: { error },
});

export const fetchOrderSuccess = (data) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: data,
});

export const fetchPromoStart = () => ({
  type: FETCH_PROMO_START,
});

export const fetchPromoFailure = (error) => ({
  type: FETCH_PROMO_FAILURE,
  payload: { error },
});

export const fetchPromoSuccess = (data) => ({
  type: FETCH_PROMO_SUCCESS,
  payload: { data },
});

export const fetchPromo = (promo, email) => async (dispatch) => {
  dispatch(fetchPromoStart());

  try {
    const response = await httpService.post('promo/', { code: promo, email });

    if (!response.ok) {
      throw new Error(response.statusText || 'Что-то пошло не так');
    }
    const json = response.json();
    console.log('promo', json);
  } catch (error) {
    dispatch(fetchPromoFailure(error.message));
  }
};

export const fetchOrder = (data) => async (dispatch) => {
  dispatch(fetchOrderStart());

  try {
    const response = await httpService.post('orders/', data);

    if (!response.ok) {
      throw new Error(response.statusText || 'Что-то пошло не так');
    }

    const json = response.json();
    console.log(json);
  } catch (error) {
    dispatch(fetchOrderFailure(error.message));
  }
};

export const fetchProduct = (id) => async (dispatch) => {
  dispatch(fetchProductStart());

  try {
    const response = await httpService.get(`card/${id}/`);

    if (!response.ok) {
      throw new Error(response.statusText || 'Что-то пошло не так');
    }

    const json = await response.json();

    dispatch(fetchProductSuccess(json));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};

export const fetchCatalog = () => async (dispatch) => {
  dispatch(fetchCatalogStart());

  try {
    const response = await httpService.get('catalog/');

    if (!response.ok) {
      throw new Error(response.statusText || 'Что-то пошло не так');
    }

    const {
      categories, items, specialization, sizes,
    } = await response.json();

    dispatch(fetchCatalogSuccess({
      categories, catalog: items, specialization, sizes,
    }));
  } catch (error) {
    dispatch(fetchCatalogFailure(error.message));
  }
};

export const fetchMainPage = () => async (dispatch) => {
  dispatch(fetchMainPageStart());

  try {
    const response = await httpService.get('main/');

    if (!response.ok) {
      throw new Error(response.statusText || 'Что-то пошло не так');
    }

    const { reviews, popular } = await response.json();

    dispatch(fetchMainPageSuccess({ reviews, popular }));
  } catch (error) {
    dispatch(fetchMainPageFailure(error.message));
  }
};

export const addProductInCart = (product) => async (dispatch) => {
  storageService.add('cart', product);
  dispatch(updateCart());
};

export const deleteProductInCart = (id) => async (dispatch) => {
  storageService.delete('cart', id);
  dispatch(updateCart());
};

export const changeQuantityInCart = (id, quantity) => async (dispatch) => {
  storageService.changeQuantity('cart', id, quantity);
  dispatch(updateCart());
};
