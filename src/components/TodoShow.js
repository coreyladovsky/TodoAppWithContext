import React from 'react';


const TodoShow = ({ todo }) => {
    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
        </li>
    )
}

export default TodoShow; 