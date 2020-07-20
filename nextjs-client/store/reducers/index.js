import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';


const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer({
        id: authReducer,
        userData: userReducer
    });
  }
}

export default reducer;
