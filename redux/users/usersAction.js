import {FETCH_USERS_SUCCESS, SET_ACTIVE_PAGE} from './usersActionType';
import axios from 'axios';


export const setActivePage = (pageNumber) => {
    return {
        type : SET_ACTIVE_PAGE,
        payload : {
            page : pageNumber
        }
    }
}

const fetchUserSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : {
            users : users
        }
    }
}

export const fetchUsers = () => {
    return async (dispatch) =>{
        let response;
        response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log("users response ", response);
        dispatch(fetchUserSuccess(response.data));
    }
}