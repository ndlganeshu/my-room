import {ItodosType} from '../store.types';
interface ActionType{
    type: string;
    payload: string;
}

const initialState:ItodosType[] = [];
export default function (state:ItodosType[] = initialState, action: ActionType){
    switch(action.type){
        case 'ADD_TODO':
            const todo = {id:state.length+1, name: action.payload};
            // todos.push(action.payload);
            return [...state, {...todo}];
        default:
            return state;
    }
}