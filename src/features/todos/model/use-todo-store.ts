import { create } from "zustand";
import type { IInitialState, ITodo, ITodosState } from "./types";

const initialState: IInitialState = {
  todos: [],
};

const saveToStorage = (todos: ITodo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const useTodoStore = create<ITodosState>((set, get) => {
  const stored = localStorage.getItem("todos");
  const initial = stored ? JSON.parse(stored) : initialState.todos;

  return {
    todos: initial,

    setTodos: (todos) => {
      saveToStorage(todos);
      set({ todos });
    },

    addTodo: (text) => {
      const newTodo: ITodo = {
        id: `#Task Id: ${Date.now()}`,
        text,
        completed: false,
      };

      const updated = [...get().todos, newTodo];
      saveToStorage(updated);
      set({ todos: updated });
    },

    deleteTodo: (id) => {
      const updated = get().todos.filter((item) => item.id !== id);
      saveToStorage(updated);
      set({ todos: updated });
    },

    completeTodo: (id) => {
      const updated = get().todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      saveToStorage(updated);
      set({ todos: updated });
    },
  };
});
