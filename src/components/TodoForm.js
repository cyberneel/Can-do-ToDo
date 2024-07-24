import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (todo.trim() && dateTime) {
      addTodo(todo, dateTime);
      setTodo('');
      setDateTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={e => setDateTime(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
