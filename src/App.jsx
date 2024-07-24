import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, dateTime) => {
    const newTodo = {
      id: Date.now(),
      text,
      dateTime,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
