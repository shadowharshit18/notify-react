import {ADD_TODO} from '../Constants'
export const addTodo=(datatodo)=>{
    
    return{
        type:ADD_TODO,
        data_todo:datatodo
    }
}