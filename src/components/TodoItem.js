import React from 'react';

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
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleTodoClick}
      />
      {todo.text} - {calculateTimeRemaining(todo.dateTime)}
    </li>
  );
};

export default TodoItem;
