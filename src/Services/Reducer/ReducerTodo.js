import {ADD_TODO} from '../Constants'

export default function todofunc(state=[],action){
   
    switch (action.type) {
            case ADD_TODO:
                // console.log(action)
            return[
                ...state,
                {todo:action.data_todo}
            ]
            break;
    
        default:
             return state
            break;
    }
    
} 