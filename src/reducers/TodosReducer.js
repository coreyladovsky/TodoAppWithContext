import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/Todos/TodoActionTypes'

const TodoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: uuidv4(),
                completed: false,
                title: action.payload.title,
                body: action.payload.body
            }
        case TOGGLE_TODO: 
            if(state.id !== action.payload) return state;
            return {
                ...state, 
                completed: !state.completed
            }
        default:
            return state;
    }
}


const TodosReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [TodoReducer(null, action), ...state];
        case REMOVE_TODO: 
            return state.filter(todo => todo.id !== action.payload)
        case TOGGLE_TODO: 
            return state.map(todo => TodoReducer(todo, action))
        default:
            return state; 
    }
}

export default TodosReducer;