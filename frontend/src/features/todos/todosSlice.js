import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all', // all, active, completed
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = todosSlice.actions;
export default todosSlice.reducer;
