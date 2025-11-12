import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
      providesTags: ['Todo'],
    }),
    getTodoById: builder.query({
      query: (id) => `/todos/${id}`,
      providesTags: (result, error, id) => [{ type: 'Todo', id }],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    // adding comment feature 3
    updateTodo: builder.mutation({
      query: ({ id, ...todo }) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Todo', id }],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
