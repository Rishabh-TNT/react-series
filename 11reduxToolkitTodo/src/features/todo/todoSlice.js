import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
  edit: { id: null, text: null, isEdit: false },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
        state.edit = { id: null, text: null, isEdit: false };
      }
    },
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setEdit } = todoSlice.actions;

export default todoSlice.reducer;
