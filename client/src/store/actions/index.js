import { LOGIN, FETCH_USER_DATA, LOGOUT, REGISTER, CHANGE_PASSWORD, CLEAR_USER_DATA, CHANGE_WEBSITE } from '../types';
import api from '../../api';
import parseServerError from '../../utils/parseServerError';

export const userLogin = ({ email, password, accessToken, tokenId }) => async (dispatch) => {
    console.log({ email, password, accessToken, tokenId });
    try {
        const res = await api.post('login', {
            email,
            password,
            accessToken,
            tokenId
        });
        const id = res.data.id;
        console.log(res.data);
        dispatch({
            type: LOGIN,
            payload: id
        });
        dispatch(fetchUserData());
        return { id };
    } catch(err) {
        err = parseServerError(err);
        return { err };
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
        err = parseServerError(err);
        return { err };
    }
}

export const fetchUserData = () => async dispatch => {
    try {
        console.log('fetching user data')
        const res = await api.get('userdata');
        const data = res.data.msg;
        let { name, email, websites, subscription, billingInfo } = data;
        websites = websites || [];
        billingInfo = billingInfo || {};

        dispatch({
            type: FETCH_USER_DATA,
            payload: {
                name, email, websites, subscription, billingInfo
            }
        });
        console.log('billingInfo pushed to store');
        // push to store

    } catch(err) {
        console.log(err);
        err = parseServerError(err);
        return { err };
    }
}

export const updateUserData = (updatedData) => async dispatch => {
    try {
        console.log('updating user data', updatedData);
        const res = await api.put('userdata', { updatedData });
        const data = res.data.msg;

        console.log(data);

        console.log('refetching userData');
        dispatch(fetchUserData());
        return { msg: data.msg };

    } catch(err) {
        console.log(err);
        err = parseServerError(err);
        return { err };
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
        const id = res.data.id;
        dispatch({
            type: CHANGE_PASSWORD,
            payload: id
        });
        console.log(res.data);
        return { id };
    } catch(err) {
        err = parseServerError(err);
        return { err }
    }
}

export const userLogout = () => async (dispatch) => {
    try {
        const res = await api.post('logout');
        window.localStorage.clear();
        console.log(res.data.msg);
        dispatch({
            type: LOGOUT
        })
        dispatch(clearUserData());
    } catch(err) {
        const error = parseServerError(err);
    }
}
