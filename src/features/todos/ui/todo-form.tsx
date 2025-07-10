import { ClipboardList, Plus } from "lucide-react";
import { Button, Input } from "../../../shared";

export const TodoForm = () => {
  return (
    <div className="flex w-full items-center gap-8">
      <div className=" relative w-full">
        <Input
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
        className="bg-transparent border cursor-pointer"
      >
        <Plus />
        Create
      </Button>
    </div>
  );
};
