import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";

// Interface para representar a tarefa
interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Estado inicial: array vazio
  const [error, setError] = useState<string | null>(null); // Estado para lidar com erros

  // Fetch de tarefas no JSON Server
  const fetchTasks = async () => {
    try {
      const response = await axios.get<Task[]>("http://localhost:3000/tasks");
      setTasks(response.data); // Atualiza o estado com os dados recebidos
    } catch (err) {
      setError("Failed to fetch tasks. Please try again later."); // Atualiza o estado com a mensagem de erro
    }
  };

  useEffect(() => {
    fetchTasks(); // Busca as tarefas ao carregar o componente
  }, []);

  // Renderiza uma mensagem de erro, se houver
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Task List</h1>
      {/* Adiciona o formulário para criar novas tarefas */}
      <TaskForm onTaskAdded={fetchTasks} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
