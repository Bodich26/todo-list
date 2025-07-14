"use client";
import React from "react";
import { ClipboardList, Plus } from "lucide-react";
import { Button, Input } from "../../../shared";
import { useAddTodo } from "../model/use-add-todo";

export const TodoForm = () => {
  const [taskName, setTaskName] = React.useState<string>("");
  const { addTask } = useAddTodo();

  const handleSubmit = () => {
    const success = addTask(taskName);
    if (success) setTaskName("");
  };

  return (
    <div className="flex w-full items-center gap-8">
      <div className=" relative w-full">
        <Input
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          type="text"
          placeholder="Enter the task name"
          className="text-neutral-200 pl-[43px] placeholder:text-neutral-200"
        />
        <ClipboardList className="absolute left-[12px] top-1/2 -translate-y-1/2 text-neutral-200" />
      </div>

      <Button
        type="submit"
        variant="default"
        size={"lg"}
        onClick={handleSubmit}
        className="bg-transparent border cursor-pointer"
      >
        <Plus />
        Create
      </Button>
    </div>
  );
};
