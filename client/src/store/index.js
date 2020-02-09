import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Logger from 'redux-logger'
import RootReducer from '../reducers/index';

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(ReduxThunk,Logger)));

export default store;