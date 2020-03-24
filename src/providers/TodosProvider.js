import React, { createContext, useReducer } from 'react';
import TodosReducer from '../reducers/TodosReducer';
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();

const TodosProvider = (props) => {
    const [todos, dispatch ] = useReducer(TodosReducer, [
        {id: 1, title: "milk", body: "buy some milk", completed: false },
        {id: 2, title: "gym", body: "biceps and back", completed: false },
    ]);


    return(
        <TodosContext.Provider value={{ todos, dispatch }} >
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider; 