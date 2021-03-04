import axios from 'axios';
import { setAlert } from './alert';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';

const getCookie = (name)=> {
    // read cookie with given name
    // we need this to read the csrf token
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');


export const registerUser = (details) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/accounts/`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(details),
  });
};

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, password});

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert('Authenticated successfully', 'success'));
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));
    }
};

export const signup = ({ name, email, password, password2}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password, password2});

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/accounts/signup/`, body, config);
        
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(login(email, password));
    }catch(err){
        dispatch({
            type: SIGNUP_FAIL
        });

        dispatch(setAlert('Error Authenticating', 'error'));

    }
};

export const logout = () => dispatch => {
    dispatch(setAlert('logout successfully.', 'success'));
    dispatch({type: LOGOUT});
}