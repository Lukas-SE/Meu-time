import { ReactNode, useEffect, useState } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  action?(): void;
  watcher?: Array<string>
}

export default function ButtonText({ children, className, action, watcher }: IButton) {
  
  const [disable, setDisable] = useState(watcher ? true : false);

  async function enabler() {
    const enabler = await (watcher as Array<string>).some(item => item === "" || item == undefined);
    setDisable(enabler);
    return enabler
  }

  useEffect(() => {
    watcher && enabler();
  }, [watcher]);

  const style =
    "flex bg-light-600 h-[3.75rem] font-space uppercase font-bold text-light-400 text-base items-center justify-center enabled:cursor-pointer rounded basis-[6.25rem] disabled:bg-dark-600 disabled:bg-opacity-20 outline-none ";
  return (
    <button
      type="submit"
      className={className ? style + className : style}
      onClick={action}
      disabled={disable ?? false}
    >
      {children}
    </button>
  );
}
