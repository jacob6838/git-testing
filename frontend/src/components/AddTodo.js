import React, { useState } from 'react';
import { useAddTodoMutation } from '../features/todos/todosApi';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        await addTodo({ title: title.trim(), completed: false }).unwrap();
        setTitle('');
      } catch (error) {
        console.error('Failed to add todo:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        style={styles.input}
        disabled={isLoading}
      />
      <button type="submit" style={styles.button} disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AddTodo;
