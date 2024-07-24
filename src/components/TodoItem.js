import React from 'react';
import { Card, FormCheck } from 'react-bootstrap';

const TodoItem = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const calculateTimeRemaining = deadline => {
    const now = new Date();
    const timeRemaining = new Date(deadline) - now;
    const minutes = Math.floor(timeRemaining / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return `${days}d ${hours % 24}h ${minutes % 60}m`;
  };

  return (
    <Card className={`mb-3 ${todo.completed ? 'bg-light' : ''} masonry-item`}>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <FormCheck
            type="checkbox"
            checked={todo.completed}
            onChange={handleTodoClick}
            className="mr-2"
          />
          <span className={todo.completed ? 'text-decoration-line-through' : ''}>
            {todo.text}
          </span>
        </div>
        <span className="text-muted small">{calculateTimeRemaining(todo.dateTime)}</span>
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
