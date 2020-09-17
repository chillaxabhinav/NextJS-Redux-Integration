import produce from 'immer';
import {SET_ACTIVE_PAGE, FETCH_USERS_SUCCESS} from './usersActionType';

const initialState = {
    activePage : 1,
    users : []
}

const userReducer = produce((draft, action) => {
    switch(action.type){
        case SET_ACTIVE_PAGE : {
            draft.activePage = action.payload.page;
        }
        case FETCH_USERS_SUCCESS : {
            draft.users = action.payload.users;
        }
    }
}, initialState);

export default userReducer;