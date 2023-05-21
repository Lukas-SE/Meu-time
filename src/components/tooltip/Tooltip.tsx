import { ReactNode } from "react";

interface ITooltip {
  children: ReactNode;
}

export default function Tooltip({ children }: ITooltip) {
  return (
    <div className="font-normal text-sm px-4 py-2 max-w-[12rem] opacity-0 absolute rounded bg-light-600 group-hover:opacity-100 text-center top-[1.75rem] transition-all pointer-events-none">
      {children}
    </div>
  );
}
