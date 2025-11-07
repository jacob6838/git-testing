import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div style={styles.app}>
        <div style={styles.container}>
          <h1 style={styles.title}>Todo App</h1>
          <p style={styles.subtitle}>
            Built with React, Redux Toolkit, RTK Query, and Spring Boot
          </p>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
    marginBottom: '30px',
  },
};

export default App;
