// Estado inicial com uma lista de tarefas de exemplo
const initialState = {
    todos: [
        { id: 123456, text: "first todo", completed: false }, // Primeira tarefa
        { id: 547383, text: "second todo", completed: false } // Segunda tarefa
    ],
};

// Reducer que gerencia as ações relacionadas às tarefas
const todosReducer = (state = initialState, action) => {
    switch (action.type) { // Verifica o tipo da ação recebida
        case "ADD_TODO": // Se a ação for adicionar uma tarefa
            return {
                ...state, // Copia o estado atual
                todos: [
                    ...state.todos, // Copia a lista de tarefas existentes
                    { id: Date.now(), text: action.payload, completed: false } // Adiciona a nova tarefa com um ID único
                ]
            };
        case "DELETE_TODO": // Se a ação for deletar uma tarefa
            return {
                ...state, // Copia o estado atual
                todos: state.todos.filter((todo) => todo.id !== action.payload) // Remove a tarefa com o ID fornecido
            };
        case "TOGGLE_TODO": // Se a ação for alternar o estado de uma tarefa
            return {
                ...state, // Copia o estado atual
                todos: state.todos.map((todo) => 
                    todo.id === action.payload ? // Procura a tarefa pelo ID
                    { ...todo, completed: !todo.completed } : // Alterna o estado
                    todo // Mantém as outras tarefas inalteradas
                )
            };
        default: 
            return state; // Retorna o estado atual se a ação não for reconhecida
    }
};

// Exporta o reducer para ser usado na store
export default todosReducer;
