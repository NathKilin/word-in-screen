// Define a ação para adicionar uma nova tarefa com o texto fornecido
export const addTodo = (text) => ({
    type: "ADD_TODO", // Tipo da ação
    payload: text // Dados enviados com a ação (texto da tarefa)
});

// Define a ação para deletar uma tarefa pelo seu ID
export const deleteTodo = (id) => ({
    type: "DELETE_TODO", // Tipo da ação
    payload: id // Dados enviados com a ação (ID da tarefa a ser deletada)
});

// Define a ação para alternar o estado de uma tarefa (completa/incompleta)
export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO", // Tipo da ação
    payload: id // Dados enviados com a ação (ID da tarefa a ser alternada)
});
