
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import pingPongReducer from './pingPongReducer';
import restaurantReducer from './restaurantReducer';

export default combineReducers({
  userReducer,
  pingPongReducer,
  restaurantReducer
});