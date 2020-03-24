import React, { useContext } from 'react';
import { TodosContext } from '../providers/TodosProvider';

const TodoShow = ({ todo }) => {
    const { removeTodo } = useContext(TodosContext);
    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button onClick={() => removeTodo(todo.id)}>Delete Todo</button>
        </li>
    )
}

export default TodoShow; 