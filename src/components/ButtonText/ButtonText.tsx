import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  action?(): void; // handle submit ---------------
}

export default function ButtonText({ children, className, action }: IButton) {
  const style =
    "flex bg-light-600 h-[3.75rem] font-space uppercase font-bold text-light-400 text-base items-center justify-center cursor-pointer rounded basis-[6.25rem]";
  return (
    <button
      type="submit"
      className={className ? className + style : style}
      onClick={action}
    >
      {children}
    </button>
  );
}
