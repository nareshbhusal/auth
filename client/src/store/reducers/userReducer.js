import { FETCH_USER_DATA, CLEAR_USER_DATA, CHANGE_WEBSITE } from '../types';

const defaultState = {
    
};

const userReducer = (state=defaultState, action) => {
    // console.log(state);
    const { type, payload } = action;

    if (type===FETCH_USER_DATA) {

        const currentWebsite = payload.currentWebsite || payload.websites[0];

        return { ...payload, currentWebsite };

    } else if(type===CLEAR_USER_DATA) {
        return {};
    } else if (type===CHANGE_WEBSITE) {
        return { ...state, currentWebsite: payload };
    }
    return state;
}

export default userReducer;