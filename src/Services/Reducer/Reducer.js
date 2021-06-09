import {ADD_NOTES,ADD_TODO,REMOVE_NOTE} from '../Constants'
const initialState={
    notes_and_todo:[]
}
export default function notes(state=[],action){
    switch (action.type) {
        case ADD_NOTES:
            console.log(action)
            return[
                ...state,
                {notes_and_todo:action.data_notes}
            ]
            console.log(state);
            break;
            case REMOVE_NOTE:
                // console.log(action)
                state.splice(action.data_notes.id,1)
                return[
                    ...state
                    
                ]
        default:
             return state
            break;
            
    
    } 
}