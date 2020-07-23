import { LOGIN, FETCH_USER_DATA, LOGOUT, REGISTER, CHANGE_PASSWORD, CLEAR_USER_DATA, CHANGE_WEBSITE } from '../types';
import api from '../../lib/api';

const handleResponse = res => {
    const { status, data } = res.data;
    // TODO: Implement clear UI messaging
    switch(status) {
        case 'fail':
            console.log('failed with data:');
            console.log(data);
            break;
        case 'success':
            console.log('success with data: ');
            console.log(data);
            break;
        case 'error':
            console.log('server error');
            break;
        default:
            console.log('Nanii!!!');
    }
    return { status, data };
}

export const userLogin = ({ email, password, accessToken, tokenId }) => async (dispatch) => {
    console.log('logging in with: ', { email, password, accessToken, tokenId });
    try {
        const res = await api.post('login', {
            email,
            password,
            accessToken,
            tokenId
        });
        const user_id = res.data.data.user_id;
        console.log(user_id);
        dispatch({
            type: LOGIN,
            payload: user_id
        });
        return handleResponse(res);
        dispatch(fetchUserData());
    } catch(err) {
        return handleResponse(err.response);
    }
}

export const userRegister = ({ name, email, password, accessToken, tokenId }) => async (dispatch) => {
    console.log({ name, email, password, accessToken, tokenId });
    try {
        const res = await api.post('register', {
            name,
            email,
            password,
            accessToken,
            tokenId
        });
        console.log(res.data);
        const id = res.data.id;
        dispatch({
            type: REGISTER,
            payload: id
        })
        return { id };
    } catch(err) {
    }
}

export const fetchUserData = () => async dispatch => {
    try {
        console.log('fetching user data')
        const res = await api.get('/user/current');
        const { email, fullname, user_id, subscription, billingInfo } = handleResponse(res).data;
        const userData = { email, fullname, user_id, subscription, billingInfo };

        dispatch({
            type: FETCH_USER_DATA,
            payload: userData
        });
        console.log('User data pushed to store');
    } catch(err) {
        return handleResponse(err.response);
    }
}

export const updateUserData = (updatedData) => async dispatch => {
    try {
        console.log('updating user data', updatedData);
        const res = await api.put('/user/edit', { updatedData });

        const { email, fullname, user_id, subscription, billingInfo } = handleResponse(res).data;
        const userData = { email, fullname, user_id, subscription, billingInfo };

        dispatch({
            type: FETCH_USER_DATA,
            payload: userData
        });
        console.log('User data updated and pushed to store');
    } catch(err) {
        return handleResponse(err.response);
    }
}

export const clearUserData = () => async dispatch => {
    dispatch({
        type: CLEAR_USER_DATA
    });
}

export const changeCurrentWebsite = (website) => async dispatch => {
    dispatch({
        type: CHANGE_WEBSITE,
        payload: website
    });
}

export const changePassword = ({ hash, password }) => async dispatch => {
    try {
        const res = await api.post('changePassword', {
            hash,
            password
        });
        handleResponse(res);
        dispatch({
            type: CHANGE_PASSWORD,
            payload: id
        });
        return "success";
    } catch(err) {
        handleResponse(err.response);
        return "fail";
    }
}

export const userLogout = () => async (dispatch) => {
    try {
        const res = await api.post('logout');
        window.localStorage.clear();
        handleResponse(res);
        dispatch({
            type: LOGOUT
        })
        dispatch(clearUserData());
    } catch(err) {
        handleResponse(err.response);
    }
}

