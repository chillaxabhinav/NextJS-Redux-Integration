import {BUY_CAKE} from './cakeActionTypes';
import produce from 'immer';

const initialState = {
    number : 10
}


const cakeReducer =  produce((draft , action) => {
    switch(action.type){

        case BUY_CAKE : {
            draft.number -= 1;
        }
    }
}, initialState);


export default cakeReducer;