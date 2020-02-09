import { combineReducers } from 'redux';
import Counter from './CounterReducer';
import User from './UserReducer';

export default combineReducers({
     Counter,
     User
});