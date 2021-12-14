import httpService from '../services/http.service';
import {
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
