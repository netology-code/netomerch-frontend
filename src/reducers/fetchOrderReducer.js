/* eslint-disable no-case-declarations */
import {
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_START,
  FETCH_ORDER_SUCCESS,
  FETCH_PROMO_FAILURE,
  FETCH_PROMO_START,
  FETCH_PROMO_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loadingOrder: false,
  errorOrder: null,
  orderIsSent: false,
  productWithPromo: {},
  loadingPromo: false,
  errorPromo: null,
};

function fetchOrderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROMO_START:
      return { ...state, loadingPromo: true };
    case FETCH_PROMO_FAILURE:
      const { error: errorPromo } = action.payload;
      return { ...state, loadingPromo: false, errorPromo };
    case FETCH_PROMO_SUCCESS:
      const { data } = action.payload;
      return {
        ...state, loadingPromo: false, errorPromo: null, productWithPromo: data,
      };
    case FETCH_ORDER_START:
      return { ...state, loadingOrder: true, orderIsSent: false };
    case FETCH_ORDER_FAILURE:
      const { error: errorOrder } = action.payload;
      return {
        ...state, loadingOrder: false, errorOrder, orderIsSent: false,
      };
    case FETCH_ORDER_SUCCESS:
      return { ...initialState, orderIsSent: true };
    default:
      return state;
  }
}

export default fetchOrderReducer;
