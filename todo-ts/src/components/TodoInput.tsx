import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";


interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input">
            <input
                type="text"
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder="Agrega una tarea..."
            />
            <button type="submit">¡Agregar!</button>
        </form>
    );
};

export default TodoInput;
