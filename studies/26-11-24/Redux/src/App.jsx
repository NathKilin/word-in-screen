import "./App.css";

// Importa o componente Provider do Redux, que conecta a store ao React
import { Provider } from "react-redux";
// Importa a store que guarda o estado global da aplicação
import { store } from "./store";

// Importa o componente TodoList, que exibe e gerencia a lista de tarefas
import TodoList from "./components/TodoList";

// Componente principal
function App() {
  return (
    <>
      {/* Envolve os componentes com o Provider para permitir o acesso à store */}
      <Provider store={store}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Redux To-Do List</h1>
          <TodoList /> 
        </div>
      </Provider>
    </>
  );
}

export default App;
