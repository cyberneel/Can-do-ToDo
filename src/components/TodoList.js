import React from 'react';
import { Container } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <Container className="masonry-grid">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </Container>
  );
};

export default TodoList;
