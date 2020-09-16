import { BUY_CAKE, FETCH_SUCCESS, SET_USERS } from './cakeActionTypes.js';
import axios from 'axios';

export const buyCake = () => {
    return {
        type : BUY_CAKE
    }
}

export const setUsers = (users) => {
    return {
        type  : SET_USERS,
        payload :  users
    }
}


const fetchSuccess = (users) => {
    return {
        type : FETCH_SUCCESS,
        payload : users
    }
}

export const fetch = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                dispatch(fetchSuccess(users));
            })
    }
}