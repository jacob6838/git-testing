import React from 'react';
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../features/todos/todosApi';

const TodoItem = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleToggle = () => {
    updateTodo({
      id: todo.id,
      title: todo.title,
      completed: !todo.completed,
    });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        style={styles.checkbox}
      />
      <span
        style={{
          ...styles.title,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#333',
        }}
      >
        {todo.title}
      </span>
      <button onClick={handleDelete} style={styles.deleteButton}>
        Delete
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    marginBottom: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  checkbox: {
    marginRight: '10px',
    cursor: 'pointer',
    width: '18px',
    height: '18px',
  },
  title: {
    flex: 1,
    fontSize: '16px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TodoItem;
