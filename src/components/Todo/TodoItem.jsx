import React from 'react';

// TodoList

export default function TodoItem({ todo, removeTodo, toggleComplete }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex' }} className='greenCase'>
        <input type='checkbox' onClick={handleCheckboxClick} />
        <li
          style={{
            color: 'black',
            textDecoration: todo.completed ? 'line-through' : null,
            backgroundColor: todo.completed ? 'green' : null,
            marginLeft: '2rem',
          }}
        >
          {todo.task}
        </li>
        <button onClick={handleRemoveClick} style={{ marginLeft: '2rem' }}>
          X
        </button>
      </div>
    </div>
  );
}
