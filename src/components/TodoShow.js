import React, { useContext } from 'react';
import { TodosContext } from '../providers/TodosProvider';
import { removeTodo } from '../actions/Todos/TodoActions';


const TodoShow = ({ todo }) => {
    const { dispatch } = useContext(TodosContext);

    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete Todo</button>
        </li>
    )
}

export default TodoShow; 