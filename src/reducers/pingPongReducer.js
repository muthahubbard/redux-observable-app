import { PING, PONG } from '../actions/pingPongActions';

const pingPongReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case PING:
      state = {...state, isPinging: true};
      break;
    case PONG:
      state = {...state, isPinging: false};
      break;
    default:
      break;  
  }
  return state;
}

export default pingPongReducer;