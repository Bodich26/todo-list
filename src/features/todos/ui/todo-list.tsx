import { useTodoStore } from "../model/use-todo-store";
import { TodoEmpty } from "./todo-empty";
import { TodoItem } from "./todo-item";

export const TodoList = () => {
  const tasks = useTodoStore((s) => s.todos);

  return (
    <div className="h-[496px] overflow-hidden">
      <div className="space-y-8 overflow-y-auto h-full">
        {tasks.length <= 0 && <TodoEmpty />}

        {tasks.map((item) => (
          <TodoItem key={item.id} text={item.text} id={item.id} />
        ))}
      </div>
    </div>
  );
};
