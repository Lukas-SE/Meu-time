import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  action?(): void;
}

export default function ButtonText({ children, className, action }: IButton) {
  const style =
    "flex bg-light-600 h-[3.75rem] font-space uppercase font-bold text-light-400 text-base items-center justify-center cursor-pointer rounded basis-[6.25rem] ";
  return (
    <button
      type="submit"
      className={className ? style + className : style}
      onClick={action}
    >
      {children}
    </button>
  );
}
