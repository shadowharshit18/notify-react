import {combineReducers} from 'redux'
import notes_and_todo from './Reducer'
import todo from './ReducerTodo'
export default combineReducers({
    notes_and_todo,todo,
})