import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();

const TodosProvider = (props) => {
    const [todos, setTodos] = useState([
        {id: 1, title: "milk", body: "buy some milk"},
        {id: 2, title: "gym", body: "biceps and back"},
    ]);
    return(
        <TodosContext.Provider value={{ todos }} >
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider; 