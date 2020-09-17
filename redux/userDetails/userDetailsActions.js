import {FETCH_USER_DETAILS, SET_USER_DETAILS, SET_PAGE_NUMBER} from './userDetailsActionType';
import axios from 'axios';


const setUserDetails = (details) => {
    return {
        type : SET_USER_DETAILS,
        payload : details
    }
}

export const setUserDetailsUsersPage = (page) => {
    return {
        type : SET_PAGE_NUMBER,
        payload : page
    }
}


export const fetchUserDetails = (id) => {
    return async (dispatch) => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(response.data);
        dispatch(setUserDetails(response.data));
    }
}