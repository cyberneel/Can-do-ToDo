import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import canvasService from './js/CanvasService';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [canvasTasks, setCanvasTasks] = useState([]);
  const [canvasToken, setCanvasToken] = useState('');
  const [error, setError] = useState(null);

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

  const fetchCanvasTasks = async () => {
    if (!canvasToken) {
      setError('Please provide a Canvas API token.');
      return;
    }

    try {
      const tasks = await canvasService.getTasks(canvasToken);
      setCanvasTasks(tasks);
      setError(null);
    } catch (error) {
      setError('Failed to fetch tasks from Canvas. Please check your token and try again.');
    }
  };

  useEffect(() => {
    if (canvasToken) {
      fetchCanvasTasks();
    }
  }, [canvasToken]);

  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <h1 className="text-center mb-4">Add Todo</h1>
          <TodoForm addTodo={addTodo} />
          <h1 className="text-center mb-4">Canvas Integration</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <input
            type="text"
            placeholder="Enter Canvas API Token"
            value={canvasToken}
            onChange={(e) => setCanvasToken(e.target.value)}
            className="form-control mb-2"
          />
          <Button variant="primary" onClick={fetchCanvasTasks} block>
            Fetch Canvas Tasks
          </Button>
          {canvasTasks.length > 0 && (
            <div className="mt-4">
              <h2 className="text-center mb-4">Canvas Tasks</h2>
              <ul className="list-group">
                {canvasTasks.map((task) => (
                  <li key={task.id} className="list-group-item">
                    {task.name} - Due: {task.due_at ? new Date(task.due_at).toLocaleString() : 'No due date'}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
