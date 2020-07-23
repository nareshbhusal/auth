import { FETCH_USER_DATA, CLEAR_USER_DATA, CHANGE_WEBSITE } from '../types';

const defaultState = {

};

const userReducer = (state=defaultState, action) => {
    // console.log(state);
    const { type, payload } = action;

    switch(type){
        case FETCH_USER_DATA:
            return { ...payload };
        case CLEAR_USER_DATA:
            return {};
        default:
            return state;
    }
}

export default userReducer;

