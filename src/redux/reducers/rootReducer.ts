import {combineReducers} from 'redux'
import helloReducer from './helloReducer';
export default combineReducers({todos: helloReducer});