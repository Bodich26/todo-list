import { useTodoStore } from "./use-todo-store";

export const useCompletedTodo = () => {
  const completeTodo = useTodoStore((state) => state.completeTodo);

  const completedTodo = (id: string) => {
    if (id) {
      completeTodo(id);
      return true;
    }
    return false;
  };

  return { completedTodo };
};
