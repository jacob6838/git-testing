import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import todosReducer from '../features/todos/todosSlice';
import { todosApi } from '../features/todos/todosApi';

// Custom middleware for logging actions (only in development)
const loggerMiddleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Dispatching action:', action);
    const result = next(action);
    console.log('New state:', store.getState());
    return result;
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware, loggerMiddleware),
});

// Enable refetchOnFocus and refetchOnReconnect behaviors
setupListeners(store.dispatch);
