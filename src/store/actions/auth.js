import axios from "axios";

import * as actionTypes from './actionsTypes';

export const authStart = () => {
  return {
      type: actionTypes.AUTH_START
  };
};

export const authSucess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVnERqLQzwbTV0Zg9x133avl_bB5TG_9Y', authData)
            .then(response => {
                console.log(response);
                dispatch(authSucess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
        ;
    };
};