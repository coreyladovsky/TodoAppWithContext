import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

const TodosProvider = (props) => {
    const [todos, setTodos] = useState();
    return(
        <TodosContext.Provider >
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider;