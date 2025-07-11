import { useTodoStore } from "./use-todo-store";

export const useAddTodo = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const addTask = (taskName: string) => {
    if (taskName.trim()) {
      addTodo(taskName.trim());
      return true;
    }
    return false;
  };

  return { addTask };
};
