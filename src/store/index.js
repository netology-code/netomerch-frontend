import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducers/cartReducer';
import fetchCatalogReducer from '../reducers/fetchCatalogReducer';
import fetchMainPageReducer from '../reducers/fetchMainPageReducer';
import fetchOrderReducer from '../reducers/fetchOrderReducer';
import fetchProductReducer from '../reducers/fetchProductReducer';

const reducer = combineReducers({
  productInCart: cartReducer,
  fetchMainPage: fetchMainPageReducer,
  fetchCatalog: fetchCatalogReducer,
  fetchProduct: fetchProductReducer,
  fetchOrder: fetchOrderReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
