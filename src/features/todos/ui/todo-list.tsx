import { AnimatePresence, motion } from "motion/react";
import { useCompletedTodo } from "../model/use-completed-todo";
import { useDeleteTodo } from "../model/use-delete-todo";
import { useTodoStore } from "../model/use-todo-store";
import { TodoEmpty } from "./todo-empty";
import { TodoItem } from "./todo-item";
import { animTaskDelete } from "../model/motion-list-todo";

export const TodoList = () => {
  const tasks = useTodoStore((s) => s.todos);
  const { deleteTask } = useDeleteTodo();
  const { completedTodo } = useCompletedTodo();

  return (
    <div className="h-[496px] overflow-hidden">
      <div className="space-y-8 overflow-y-auto h-full relative">
        {tasks.length === 0 && <TodoEmpty />}

        <AnimatePresence>
          {tasks.map((item) => (
            <motion.div key={item.id} {...animTaskDelete}>
              <TodoItem
                key={item.id}
                text={item.text}
                id={item.id}
                onDelete={deleteTask}
                onCompleted={completedTodo}
                completed={item.completed}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
