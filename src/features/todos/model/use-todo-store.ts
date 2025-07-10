import { create } from "zustand";
import type { IInitialState, ITodo, ITodosState } from "./types";

const initialState: IInitialState = {
  todos: [],
  isLoading: false,
};

export const useTodoStore = create<ITodosState>((set) => ({
  ...initialState,

  addTodo: (text) => {
    const newTodo: ITodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },

  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  completeTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
}));
