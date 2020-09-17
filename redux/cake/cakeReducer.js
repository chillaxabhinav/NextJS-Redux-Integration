import {BUY_CAKE, FETCH_SUCCESS, SET_USERS} from './cakeActionTypes';
import produce from 'immer';

const initialState = {
    number : 10,
    users : []
}


const cakeReducer =  produce((draft , action) => {
    switch(action.type){

        case BUY_CAKE : {
            draft.number -= 1;
        }

        case FETCH_SUCCESS : {
            draft.users = action.payload;
        }

        case SET_USERS :  {
            draft.users = action.payload;
        }
    }
}, initialState);


export default cakeReducer;