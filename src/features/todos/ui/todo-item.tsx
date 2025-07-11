type Props = {
  text: string;
  id: string;
};

export const TodoItem = ({ text, id }: Props) => {
  return (
    <div className="p-3 rounded-md bg-[#E4E4E7]/10 w-full min-h-[80px] border border-[#E4E4E7]/40 backdrop-blur-[0px] inner-shadow-block">
      <span className="font-medium text-md text-neutral-200">{id}</span>
      <p className="font-normal text-[16px] text-neutral-200">{text}</p>
    </div>
  );
};
