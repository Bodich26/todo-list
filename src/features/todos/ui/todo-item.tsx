import { CircleCheck, Trash } from "lucide-react";
import { Button } from "../../../shared";

type Props = {
  text: string;
  id: string;
  onDelete: (id: string) => void;
};

export const TodoItem = ({ text, id, onDelete }: Props) => {
  return (
    <div className="group relative p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
      <span className="font-medium text-md text-neutral-200 mb-2">{id}</span>
      <p className="font-normal text-[16px] text-neutral-200 mt-1.5">{text}</p>

      <div className="cursor-pointer bg-[#313131] left-0 ring-0 top-0 bottom-0 w-full rounded-md border border-[#E4E4E7]/40 absolute flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-center items-center gap-8">
          <Button
            type="submit"
            variant="default"
            size={"lg"}
            onClick={() => onDelete(id)}
            className="bg-transparent border cursor-pointer"
          >
            <Trash width={24} />
            Delete
          </Button>
          <Button
            type="submit"
            variant="default"
            size={"lg"}
            className="bg-transparent border cursor-pointer"
          >
            <CircleCheck width={24} />
            Execute
          </Button>
        </div>
      </div>
    </div>
  );
};
