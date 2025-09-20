import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input">
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Agrega una tarea..."
            />
            <button type="submit">¡Agregar!</button>
        </form>
    );
};

export default TodoInput;
