
import { INCREMENT, DECREMENT } from '../constants'; 

let initalState = {count:10};

export default (state = initalState, action) => {

    switch(action.type){

        case INCREMENT:
            return {...state, count: state.count += 1};

        case DECREMENT:
                return {...state, count: state.count -= 1};

        default: 
        return state;

    }
}