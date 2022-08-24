import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value, id: Date.now() });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo });
      setTodo({ ...todo, task: '' });
    }

    console.log(todo);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='task'
          type='text'
          value={todo.task}
          onChange={handleTaskInputChange}
        ></input>
        <button>Add todo</button>
      </form>
    </>
  );
}
