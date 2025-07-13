import { CircleCheck, Trash } from "lucide-react";
import { Button, cn } from "../../../shared";

type Props = {
  text: string;
  id: string;
  onDelete: (id: string) => void;
  onCompleted: (id: string) => void;
  completed: boolean;
};

export const TodoItem = ({
  text,
  id,
  onDelete,
  onCompleted,
  completed,
}: Props) => {
  return (
    <div
      className={cn(
        "group relative p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border backdrop-blur-[0px] ",
        completed
          ? "border-[#E4E4E7]/20 bg-[#E4E4E7]/0 inner-shadow-block-completed"
          : "border-[#E4E4E7]/40 bg-[#E4E4E7]/10 inner-shadow-block"
      )}
    >
      <span
        className={cn(
          "font-medium text-md mb-2",
          completed ? "text-neutral-400" : "text-neutral-200"
        )}
      >
        {id}
      </span>
      <p
        className={cn(
          "font-normal text-[16px] mt-1.5",
          completed ? "text-neutral-400" : "text-neutral-200"
        )}
      >
        {text}
      </p>

      <div className=" bg-[#313131] left-0 ring-0 top-0 bottom-0 w-full rounded-md border border-[#E4E4E7]/40 absolute flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="flex justify-center items-center gap-8">
          <Button
            type="submit"
            variant="default"
            size={"lg"}
            onClick={() => onDelete(id)}
            className="bg-transparent border cursor-pointer w-32"
          >
            <Trash width={24} />
            Delete
          </Button>
          <Button
            type="submit"
            variant="default"
            size={"lg"}
            onClick={() => onCompleted(id)}
            className="bg-transparent border cursor-pointer w-32"
          >
            <CircleCheck width={24} />
            Complete
          </Button>
        </div>
      </div>
    </div>
  );
};
