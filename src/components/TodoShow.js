import React, { useContext } from 'react';
import { TodosContext } from '../providers/TodosProvider';
import { removeTodo, toggleTodo } from '../actions/Todos/TodoActions';
import "../css/Todos/TodoShow.css";

const TodoShow = ({ todo }) => {
    const { dispatch } = useContext(TodosContext);

    return(
        <li 
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={todo.completed ? "lineThrough" : "noLineThrough"}
        >
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete Todo</button>
        </li>
    )
}

export default TodoShow; 