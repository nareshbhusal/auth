import { FETCH_USER_DATA, CLEAR_USER_DATA, CHANGE_WEBSITE } from '../types';

const defaultState = {

};

const userReducer = (state=defaultState, action) => {
    const { type, payload } = action;

    switch(type){
        case FETCH_USER_DATA:
            const newState = { ...state, ...payload }
            return newState;
        case CLEAR_USER_DATA:
            return {};
        default:
            return state;
    }
}

export default userReducer;

