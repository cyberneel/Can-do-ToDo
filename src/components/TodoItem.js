import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleTodoClick}
      />
      {todo.text}
    </li>
  );
};

export default TodoItem;
