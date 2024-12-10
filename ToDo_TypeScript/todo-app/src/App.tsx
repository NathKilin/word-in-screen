import React, { useState, useEffect } from "react";
import { Todo } from "./types";

const App: React.FC = () => {
  // State for todos and input text
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) setTodos(JSON.parse(storedTodos));
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = () => {
    if (!text.trim()) return; // Prevent adding empty todos
    if (todos.some((todo) => todo.text === text.trim())) return; // Prevent duplicate todos

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText(""); // Clear the input field
  };

  // Delete a specific todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear all completed todos
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Edit a todo
  const editTodo = (id: string) => {
    const newText = prompt("Edit todo:", todos.find((todo) => todo.id === id)?.text || "");
    if (newText && newText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText.trim() } : todo
        )
      );
    }
  };

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // "all"
  });

  // Count total, active, and completed todos
  const totalTodos = todos.length;
  const activeTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <h1>Todo App</h1>

      {/* Input and Add button */}
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {/* Filter buttons */}
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {/* Todo counters */}
      <div>
        <p>Total Todos: {totalTodos}</p>
        <p>Active Todos: {activeTodos}</p>
        <p>Completed Todos: {completedTodos}</p>
      </div>

      {/* Todo list */}
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                  )
                )
              }
            />
            {todo.text}
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Clear completed button */}
      <button onClick={clearCompletedTodos}>Clear Completed Todos</button>
    </div>
  );
};

export default App;
