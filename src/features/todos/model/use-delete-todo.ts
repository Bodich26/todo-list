import { useTodoStore } from "./use-todo-store";

export const useDeleteTodo = () => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const deleteTask = (id: string) => {
    if (id) {
      deleteTodo(id);
      return true;
    }
    return false;
  };

  return { deleteTask };
};
