import { useAuth } from "../../contexts/auth";

interface ITeamInfo {
  info: {
    league: string[];
    team: string[];
    season: string;
  };
}
interface IUses {
  requests: {
    current: number;
    limit_day: number;
  };
}

export default function ApiCountLarge({ info }: ITeamInfo) {
  const { user } = useAuth();

  return (
    <div className="h-full w-full flex flex-col font-space font-bold text-light-400 justify-around">
      <div className="flex space-x-5 items-center justify-center h-4/5 overflow-hidden md:space-x-10 md:h-full">
        <div className="w-1/4 aspect-square shrink-0 flex items-center justify-center md:w-auto md:h-full">
          {info.team[1] ? (
            <img
              className=" w-full h-full object-contain"
              src={info?.team[1]}
              alt="Team image"
            />
          ) : (
            <div className=" w-full h-full bg-light-700 rounded-2xl"></div>
          )}
        </div>
        <div className="max-w-[75%] flex-1 flex h-full text-[3.8vmin] flex-col uppercase justify-center md:max-w-none md:text-[2vmin]">
          <div className=" max-h-[90%] md:max-h-none leading-5 md:overflow-visible">
            <p>{info.team[0]}</p>
          </div>
          <div className="whitespace-nowrap text-[2.7vmin] font-normal uppercase text-light-600 md:text-[1.5vmin]">
            <p>
              {info.season} - {info.league}
            </p>
          </div>
          <div className="hidden w-full items-center overflow-hidden md:flex md:flex-col md:text-[1.5vmin]">
            <div className="flex w-full items-end">
              <p className="flex-1">USOS DIÁRIOS:</p>
              <p className="uppercase font-spaceMono md:text-[2vmin] text-light-600">
              {(user as IUses).requests.current} <span className="text-light-400">DE</span> {(user as IUses).requests.limit_day}
              </p>
            </div>
            <div className=" h-4 w-full flex box-border border-2 rounded-full border-light-600 p-[2px]">
              <div style={{width: ((((user as IUses).requests.current / (user as IUses).requests.limit_day) * 100) + "%")}} className=" bg-light-600 rounded-full h-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full items-center space-x-5 overflow-hidden md:hidden">
        <div className="flex-1 h-full flex box-border border-2 rounded-full border-light-600 p-[2px]">
          <div style={{width: ((((user as IUses).requests.current / (user as IUses).requests.limit_day) * 100) + "%")}} className="bg-light-600 rounded-full h-full"></div>
        </div>
        <p>{(user as IUses).requests.current} / {(user as IUses).requests.limit_day}</p>
      </div>
    </div>
  );
}
