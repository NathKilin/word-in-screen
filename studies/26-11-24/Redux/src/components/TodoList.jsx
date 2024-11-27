import React, { useState } from "react";
 import { addTodo, toggleTodo, deleteTodo } from "../store/actions/TodosActions.js";
// Importa os hooks do Redux para conectar o componente à store
import { useDispatch, useSelector } from "react-redux";

// Componente que exibe e gerencia a lista de tarefas
function TodoList() { 
  // Seleciona a lista de tarefas do estado global
  const todos = useSelector((state) => state.todos);
  
  // Estado local para o texto de uma nova tarefa
  const [newTodo, setNewTodo] = useState("");
  // Hook que permite despachar ações para a store
  const dispatch = useDispatch();

  // Função que adiciona uma nova tarefa ao clicar no botão
  const handleAddTodo = () => {
    dispatch(addTodo(newTodo)); // Despacha a ação de adicionar tarefa
    setNewTodo(""); // Limpa o campo de texto
  };

  return (
    <div>
      {/* Título da lista */}
      <h2>To-Do List</h2>
      {/* Campo de texto para adicionar uma nova tarefa */}
      <input
        type="text" // Tipo do input
        value={newTodo} // Valor atual do estado
        onChange={(e) => setNewTodo(e.target.value)} // Atualiza o estado ao digitar
        placeholder="Add a new task" // Texto exibido no campo vazio
      />
      {/* Botão para adicionar a tarefa */}
      <button onClick={handleAddTodo}>Add</button>
      {/* Lista não ordenada para exibir as tarefas */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => ( // Itera sobre as tarefas
          <li key={todo.id} style={{ margin: "10px 0" }}> {/* Cada tarefa */}
            {/* Texto da tarefa com alternância de estado ao clicar */}
            <span
              onClick={() => dispatch(toggleTodo(todo.id))} // Alterna entre completo/incompleto
              style={{
                textDecoration: todo.completed ? "line-through" : "none", // Risca texto se estiver completo
                cursor: "pointer", // Muda o cursor para indicar clicável
              }}
            >
              {todo.text} {/* Texto da tarefa */}
            </span>
            {/* Botão para deletar a tarefa */}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))} // Remove a tarefa
              style={{ marginLeft: "10px" }} // Adiciona espaço ao lado
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporta o componente para ser usado em outros arquivos
export default TodoList;
