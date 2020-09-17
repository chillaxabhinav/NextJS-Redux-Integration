import { createStore, applyMiddleware } from 'redux';
import cakeReducer from './cake/cakeReducer';
import reduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));


export default store;