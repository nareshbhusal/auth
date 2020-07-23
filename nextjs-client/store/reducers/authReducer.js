import { REGISTER, LOGIN, LOGOUT, CHANGE_PASSWORD } from '../types';

const defaultState = {
    user_id: null
};

const authReducer = (state=defaultState, action) => {
    // console.log(state);
    switch(action.type) {
        case LOGIN:
        case REGISTER:
        case CHANGE_PASSWORD:
            return { ...state, user_id: action.payload };
        case LOGOUT:
            return { user_id: null };
        default:
            return state;
    }
}

export default authReducer;

