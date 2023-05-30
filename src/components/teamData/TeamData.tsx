interface ITeamData {
  games: number;
  wins: number;
  loses: number;
  draws: number;
  topFormation: string;
}

export default function TeamData({
  games,
  wins,
  loses,
  draws,
  topFormation,
}: ITeamData) {
  return (
    <div className="w-full text-[2.7vmin] lg:text-[1.85vh] font-space font-bold text-light-400 flex flex-col lg:h-full">
      <div className="bg-light-600 py-4 flex flex-col text-center items-center justify-center rounded-t-2xl lg:h-1/5 lg:aspect-square lg:mr-2 lg:mb-2 lg:py-0 lg:rounded-tr lg:rounded-b">
        <p>
          FORMAÇÃO <br className="hidden lg:inline" /> MAIS USADA
        </p>
        <p className="font-spaceMono font-normal">{topFormation}</p>
      </div>
      <div className="bg-dark-700 flex flex-1 items-center justify-center p-5 rounded lg:rounded-r-none lg:rounded-tl lg:rounded-bl-2xl lg:border-dark-600 lg:border-r-[1px]">
        <div className="flex flex-1 items-center justify-center space-x-5 lg:space-x-0 lg:space-y-2 lg:flex-col lg:h-full ">
          <div className="bg-dark-600 bg-opacity-50 rounded flex flex-col justify-center items-center aspect-square flex-1">
            <p>JOGOS</p>
            <p className="font-spaceMono text-light-600 font-normal text-3xl">
              {games}
            </p>
          </div>
          <div className="bg-dark-600 bg-opacity-50 rounded flex flex-col justify-center items-center aspect-square flex-1">
            <p>VITÓRIAS</p>
            <p className="font-spaceMono text-light-600 font-normal text-3xl">
              {wins}
            </p>
          </div>
          <div className="bg-dark-600 bg-opacity-50 rounded flex flex-col justify-center items-center aspect-square flex-1">
            <p>DERROTAS</p>
            <p className="font-spaceMono text-light-600 font-normal text-3xl">
              {loses}
            </p>
          </div>
          <div className="bg-dark-600 bg-opacity-50 rounded flex flex-col justify-center items-center aspect-square flex-1 lg:rounded-bl-2xl">
            <p>EMPATES</p>
            <p className="font-spaceMono text-light-600 font-normal text-3xl">
              {draws}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
