import React, { useState, useContext } from 'react';
import { TodosContext } from '../providers/TodosProvider';

const TodoForm = () => {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const { addTodo } = useContext(TodosContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ title, body })
        setTitle("");
        setBody("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Title: 
                <input value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </label>
            <label> Body: 
                <input value={body} onChange={(e) => setBody(e.target.value)} required/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default TodoForm; 