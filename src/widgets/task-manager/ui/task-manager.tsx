import { TodoForm, TodoItem } from "../../../features/todos";

export const TaskManager = () => {
  return (
    <>
      <h1 className="uppercase font-bold text-[198px] text-center title-gradient max-md:text-[130px] max-sm:text-[90px] tracking-[0.15em] leading-[1.1]">
        TODO LIST
      </h1>
      <div className="w-full max-w-[908px] min-h-[620px] rounded-3xl m-auto p-8 bg-[#D8D8D8]/3 backdrop-blur-[16px] inner-shadow-block mt-[-85px]">
        <div className="flex flex-col justify-between gap-8">
          <TodoForm />
          <div className="h-[496px] overflow-hidden">
            <div className="space-y-8 overflow-y-auto h-full">
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
              <TodoItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
