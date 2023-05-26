import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import { useAuth } from "../../contexts/auth";

export default function ApiCountSmall() {
  const [percentage, setPercentage] = useState<IUses>({
    requests: { current: 0, limit_day: 0 },
  });
  const { login, logout } = useAuth();

  interface IUses {
    requests: {
      current: number;
      limit_day: number;
    };
  }

  useEffect(() => {
    async function uses() {
      try {
        const key = await localStorage.getItem("APIkey");
        const uses = await login(key as string);
        setPercentage(uses as IUses);

      } catch (error) {
        console.log(error);
        
        logout();
      }
    }
    uses();
  }, []);

  return (
    <div className="h-[3.125rem] flex mb-5 items-center">
      <Logo />
      <div className="font-spaceMono uppercase font-bold pl-5 align flex flex-col justify-between">
        <div className="flex justify-between whitespace-nowrap items-center">
          <div className="flex items-center">
            <p className="text-xl pr-2">API KEY</p>
            <p className="text-xs px-2 lg:pl-3 border-l-[1px] border-dark-600 border-opacity-30">
              USOS DIÁRIOS
            </p>
          </div>
        </div>
        <div className="mb-1">
          <div className=" bg-dark-700 rounded-full w-full">
            <div className={"h-2 bg-light-600 rounded-full w-[25%]"}></div>
          </div>
          <p className="text-xs pt-1 text-light-600">
            {`${percentage?.requests.current} `}
            <span className="text-dark-700">DE</span>
            {` ${percentage?.requests.limit_day}`}
          </p>
        </div>
      </div>
    </div>
  );
}
