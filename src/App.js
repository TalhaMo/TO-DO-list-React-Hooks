import React from 'react';
import './App.css'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>To do list with react hooks</h1>
      <TodoList/>
    </div>
  );
}

export default App;
