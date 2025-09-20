import React from "react";
import type { Todo } from "./TodoApp";

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // evita conflicto con toggle
                    deleteTodo(todo.id);
                }}
            >
                Borrar :(
            </button>
        </li>
    );
};

export default TodoItem;
