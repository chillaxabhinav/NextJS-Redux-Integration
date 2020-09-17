import produce from 'immer';
import {SET_USER_DETAILS, SET_PAGE_NUMBER} from './userDetailsActionType';

const initialState = {
    userDetail : {},
    userActivePage : 1
}

const userDetailsReducer = produce((draft, action) => {
    switch(action.type){
        case SET_USER_DETAILS : {
            draft.userDetail = action.payload;
        }
        break;
        case SET_PAGE_NUMBER:  {
            draft.userActivePage = parseInt(action.payload);
        }
        break;
    }
}, initialState);


export default userDetailsReducer;