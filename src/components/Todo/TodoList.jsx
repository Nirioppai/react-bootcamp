import React from 'react';
import TodoItem from './TodoItem';
//TodoList
export default function TodoList({ todos, removeTodo, toggleComplete }) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}
