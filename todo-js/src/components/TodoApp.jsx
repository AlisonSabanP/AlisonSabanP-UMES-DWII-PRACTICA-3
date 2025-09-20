import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Filters from "./Filters";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all"); 

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        if (text.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
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
