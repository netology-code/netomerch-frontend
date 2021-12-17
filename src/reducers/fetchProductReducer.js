/* eslint-disable no-case-declarations */
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS } from '../actions/actionTypes';

const initialState = {
  product: {},
  reviews: [],
  loading: false,
  error: null,
};

function fetchProductReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_START:
      return { ...state, loading: true };
    case FETCH_PRODUCT_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case FETCH_PRODUCT_SUCCESS:
      const { data } = action.payload;
      const { reviews, product } = data;
      return {
        ...state, product, reviews, loading: false, error: null,
      };
    default:
      return state;
  }
}

export default fetchProductReducer;
