import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import userReducer from './users/usersReducer';
import userDetailsReducer from './userDetails/userDetailsReducer';



const rootReducer = combineReducers({cakeReducer, userReducer, userDetailsReducer});

export default rootReducer;