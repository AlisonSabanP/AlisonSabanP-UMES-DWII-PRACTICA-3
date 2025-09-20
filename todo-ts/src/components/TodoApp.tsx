import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Filters from "./Filters";

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

    useEffect(() => {
        const saved: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        if (text.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "pending") return !todo.completed;
        return true;
    });

    return (
        <div className="todo-app">
            <h1>♥ To Do App ♥</h1>
            <TodoInput addTodo={addTodo} />
            <Filters filter={filter} setFilter={setFilter} />
            <TodoList
                todos={filteredTodos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
};

export default TodoApp;
