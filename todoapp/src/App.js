import React, {useState} from 'react';
import Header from './components/Header';
import "./App.css";
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return(
    <div className="container">
      <div className="app-header">
        <div>
          <Header />
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
           />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
