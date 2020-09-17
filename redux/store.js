import { createStore, applyMiddleware } from 'redux';
import cakeReducer from './cake/cakeReducer';
import reduxThunk from 'redux-thunk';
// import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';



const store = createStore(cakeReducer, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;