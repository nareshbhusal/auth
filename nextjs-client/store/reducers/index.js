import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

import { diff } from 'jsondiffpatch';

const defaultState = {};

const combinedReducer = combineReducers({
    auth: authReducer,
    userData: userReducer
});

const reducer = (state=defaultState, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
          ...state, // use previous state
          ...action.payload, // apply delta from hydration
        }

        // TODO: merge with existing client state
        return nextState;

    } else {
        return combinedReducer(state, action);
    }
}

export default reducer;
