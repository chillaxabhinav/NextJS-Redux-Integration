import {BUY_CAKE, FETCH_SUCCESS, SET_USERS} from './cakeActionTypes';

const initialState = {
    number : 10,
    users : []
}


const cakeReducer = (state = initialState, action) => {
    switch(action.type){

        case BUY_CAKE : return {
            ...state,
            number : state.number - 1
        }

        case FETCH_SUCCESS : return {
            ...state,
            users : action.payload
        }

        case SET_USERS :  return {
            ...state,
            users : action.payload
        }

        default : return state;
    }
}


export default cakeReducer;