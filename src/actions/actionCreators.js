import httpService from '../services/http.service';
import {
  FETCH_CATALOG_FAILURE,
  FETCH_CATALOG_START,
  FETCH_CATALOG_SUCCESS,
  FETCH_MAINPAGE_FAILURE,
  FETCH_MAINPAGE_START,
  FETCH_MAINPAGE_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
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

export const fetchProduct = (id) => async (dispatch) => {
  dispatch(fetchProductStart());

  try {
    const response = await httpService.get(`card/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText || 'Что-то пошло не так');
    }

    const json = await response.json();
    console.log(json);
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

    const { categories, items, specialization } = await response.json();

    dispatch(fetchCatalogSuccess({ categories, catalog: items, specialization }));
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
