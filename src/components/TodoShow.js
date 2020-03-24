import React, { useContext } from 'react';
import { TodosContext } from '../providers/TodosProvider';

const TodoShow = ({ todo }) => {
    const { dispatch } = useContext(TodosContext);

    const removeTodo = () => {
        dispatch({
            type: "REMOVE_TODO", 
            payload: todo.id
        })
    }
    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button onClick={removeTodo}>Delete Todo</button>
        </li>
    )
}

export default TodoShow; 