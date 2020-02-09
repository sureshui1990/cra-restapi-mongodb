
import { LOGIN, LOGOUT } from '../constants'; 

let initalState = {
    isLogin:null
};

export default (state = initalState, action) => {
    
    switch(action.type){

        case LOGIN:
            return {...state, isLogin:true, details:action.payload };

        case LOGOUT:
                return {...state,isLogin:false, details:action.payload };

        default: 
        return state;

    }
}