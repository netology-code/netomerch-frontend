/* eslint-disable no-case-declarations */
import { FETCH_CATALOG_FAILURE, FETCH_CATALOG_START, FETCH_CATALOG_SUCCESS } from '../actions/actionTypes';

const initialState = {
  catalog: [],
  categories: [],
  error: null,
  loading: false,
};

function fetchCatalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATALOG_START:
      return { ...state, loading: true };
    case FETCH_CATALOG_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case FETCH_CATALOG_SUCCESS:
      const { data } = action.payload;
      console.log(data);
      return state;
    default:
      return state;
  }
}

export default fetchCatalogReducer;
