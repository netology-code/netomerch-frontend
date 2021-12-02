import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducers/cartReducer';

const reducer = combineReducers({
  productInCart: cartReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
