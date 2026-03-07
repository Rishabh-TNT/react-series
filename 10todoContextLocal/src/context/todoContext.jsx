import { createContext, useContext } from "react";

export const TodoContext = createContext({}); //todos, addTodo, editTodo, deleteTodo, completeTodo

export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
