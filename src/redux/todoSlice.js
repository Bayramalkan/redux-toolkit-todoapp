import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, todo: "todo1", completed: false },
  { id: 2, todo: "todo2", completed: false },
  { id: 3, todo: "todo3", completed: false },
  { id: 4, todo: "todo4", completed: false },
  { id: 5, todo: "todo5", completed: false },
  { id: 6, todo: "todo6", completed: false },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        todo: action.payload.todo,
        completed: false,
      };
      state.push(newTodo);
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    toggleTodo: (state, action) => {
      return state.map((todo) => (
          todo.id === action.payload.id ? {...todo,completed: !todo.completed} : todo
      ));
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
