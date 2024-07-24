import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <h1 className="text-center mb-4">Add Todo</h1>
          <TodoForm addTodo={addTodo} />
        </Col>
        <Col md={8}>
          <h1 className="text-center mb-4">Todo List</h1>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
