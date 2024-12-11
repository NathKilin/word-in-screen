import React, { useState } from "react";
import axios from "axios";

interface TaskFormProps {
  onTaskAdded: () => void; // Função chamada após adicionar a tarefa
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/tasks", {
        id: Date.now().toString(), // Gerar um ID único
        title,
        description,
        dueDate,
        priority,
        status: "Pending", // Status padrão ao criar
      });

      // Limpa os campos do formulário
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");

      // Notifica o componente pai que a tarefa foi adicionada
      onTaskAdded();
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Priority:</label>
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as "Low" | "Medium" | "High")
          }
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
