import React, { useContext } from 'react';
import { TodosContext } from '../providers/TodosProvider';
import TodoShow from './TodoShow';

const TodosIndex = () => {
    const {todos} = useContext(TodosContext);

    return (
        <ul>
            {todos.map(todo => (
                <TodoShow key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
};

export default TodosIndex 