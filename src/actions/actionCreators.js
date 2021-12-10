import httpService from '../services/http.service';
import {
  FETCH_CATALOG_FAILURE,
  FETCH_CATALOG_START,
  FETCH_CATALOG_SUCCESS,
  FETCH_MAINPAGE_FAILURE, FETCH_MAINPAGE_START, FETCH_MAINPAGE_SUCCESS, UPDATE_CART,
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

export const fetchCatalog = () => async (dispatch) => {
  dispatch(fetchCatalogStart());

  try {
    const responses = await Promise.all([
      httpService.get('categories/'),
      httpService.get('items/'),
    ]);
    const responsesJson = await Promise.all(responses.map((res) => res.json()));
    console.log(responsesJson);
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

    const json = await response.json();

    dispatch(fetchMainPageSuccess({ reviews: json.reviews, popular: json.items }));
  } catch (error) {
    dispatch(fetchMainPageFailure(error.message));
  }
};
