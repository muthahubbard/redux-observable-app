import { CHANGE_NAME } from '../actions/userActions'

const userReducer = (state = { name: 'hello world'}, action) => {
  switch(action.type) {
    case CHANGE_NAME: {
      state = {...state, name: action.payload };
      break;
    }
    default: {
      state = {...state};
      break;
    }
  }

  return state;
}

export default userReducer;