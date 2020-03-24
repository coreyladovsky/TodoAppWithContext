import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();

const TodosProvider = (props) => {
    const [todos, setTodos] = useState([
        {id: 1, title: "milk", body: "buy some milk", completed: false },
        {id: 2, title: "gym", body: "biceps and back", completed: false },
    ]);

    const addTodo = (todo) => {
        todo.id = uuidv4();
        todo.completed = false; 
        setTodos(prevTodos => [todo, ...prevTodos])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
        <TodosContext.Provider value={{ todos, addTodo, removeTodo }} >
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider; 