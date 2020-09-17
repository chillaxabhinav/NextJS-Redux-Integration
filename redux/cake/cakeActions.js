import { BUY_CAKE} from './cakeActionTypes.js';
import axios from 'axios';

export const buyCake = () => {
    return {
        type : BUY_CAKE
    }
}