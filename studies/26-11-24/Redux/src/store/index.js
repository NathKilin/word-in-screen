// Importa a função para criar a store do Redux
import { createStore } from 'redux';
// Importa o reducer que gerencia o estado das tarefas
import todosReducer from './reducers/TodoReducer';

// Cria a store usando o reducer das tarefas
export const store = createStore(todosReducer);
