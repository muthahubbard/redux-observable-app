import { combineEpics } from 'redux-observable';
import pingEpic from './pingEpic';
import loadRestaurantDataEpic from './restaurantEpic';

export default combineEpics(
  pingEpic,
  loadRestaurantDataEpic
);

