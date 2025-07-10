type Props = {
  children: React.ReactNode;
};
export const Container = ({ children }: Props) => {
  return <div className=" container px-[15px] mx-auto">{children}</div>;
};
