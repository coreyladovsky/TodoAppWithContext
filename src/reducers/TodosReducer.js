import { v4 as uuidv4 } from 'uuid';

const TodosReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { payload } = action; 
            payload.id = uuidv4();
            payload.completed = false; 
            return [payload, ...state];
        case "REMOVE_TODO": 
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state; 
    }
}

export default TodosReducer;