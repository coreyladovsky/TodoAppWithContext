import React, { useState } from 'react';

const TodoForm = () => {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");

    const handlelSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        setBody("")
    }
    return(
        <form onSubmit={handlelSubmit}>
            <label> Title: 
                <input value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </label>
            <label> Body: 
                <input value={body} onChange={(e) => setBody(e.target.value)} required/>
            </label>
        </form>
    )
}

export default TodoForm; 