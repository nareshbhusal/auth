import { REGISTER, LOGIN, LOGOUT, CHANGE_PASSWORD } from '../types';

const defaultState = {
    id: null
};

const authReducer = (state=defaultState, action) => {
    // console.log(state);
    switch(action.type) {

        case LOGIN:
        case REGISTER:
        case CHANGE_PASSWORD:
            return { ...state, id: action.payload };
            
        case LOGOUT:
            // return { ...state, id: null };
            return { id: null };
        default:
            return state;
    }
}

export default authReducer;