import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTodosQuery } from '../features/todos/todosApi';
import { setFilter } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { data: todos = [], isLoading, error } = useGetTodosQuery();
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (isLoading) return <div style={styles.message}>Loading todos...</div>;
  if (error) return <div style={styles.error}>Error loading todos</div>;

  return (
    <div>
      <div style={styles.filters}>
        <button
          onClick={() => dispatch(setFilter('all'))}
          style={{
            ...styles.filterButton,
            backgroundColor: filter === 'all' ? '#2196F3' : '#e0e0e0',
            color: filter === 'all' ? 'white' : '#333',
          }}
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter('active'))}
          style={{
            ...styles.filterButton,
            backgroundColor: filter === 'active' ? '#2196F3' : '#e0e0e0',
            color: filter === 'active' ? 'white' : '#333',
          }}
        >
          Active
        </button>
        <button
          onClick={() => dispatch(setFilter('completed'))}
          style={{
            ...styles.filterButton,
            backgroundColor: filter === 'completed' ? '#2196F3' : '#e0e0e0',
            color: filter === 'completed' ? 'white' : '#333',
          }}
        >
          Completed
        </button>
      </div>

      {filteredTodos.length === 0 ? (
        <div style={styles.message}>No todos to display</div>
      ) : (
        <div style={styles.list}>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}

      <div style={styles.summary}>
        {todos.length} total, {todos.filter((t) => !t.completed).length} active
      </div>
    </div>
  );
};

const styles = {
  filters: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  filterButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  list: {
    marginTop: '10px',
  },
  message: {
    textAlign: 'center',
    padding: '20px',
    color: '#666',
  },
  error: {
    textAlign: 'center',
    padding: '20px',
    color: '#f44336',
  },
  summary: {
    marginTop: '20px',
    padding: '10px',
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
    backgroundColor: '#f5f5f5',
    borderRadius: '4px',
  },
};

export default TodoList;
