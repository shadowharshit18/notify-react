import {ADD_NOTES,ADD_TODO,REMOVE_NOTE} from '../Constants'
export const addNotes=(datanote)=>{
    // console.log(data)
    return{
        type:ADD_NOTES,
        data_notes:datanote
    }
}
export const deletenNote=(datanote)=>{
    // console.log(datanote)
    return{
        type:REMOVE_NOTE,
        data_notes:datanote
    }
}