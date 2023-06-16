import { useEffect, useState } from "react";
import PlayerCard from "../playerCard";

interface IPLayers {
  data(): Promise<string[][]>;
}

export default function PlayerScroller({ data }: IPLayers) {
  const [players, setPlayers] = useState<string[][]>();

  useEffect(() => {
    async function loadPlayers() {
      const p = await data();
      setPlayers(p);
    }
    loadPlayers();
  }, []);

  return (
    <div className="flex flex-col px-5 pt-3 bg-dark-700 w-full h-full rounded-b-2xl lg:rounded-l lg:rounded-r-2xl">
      <div className="w-full py-4 bg-dark-700 top-0 text-xl font-space font-bold border-dark-600 border-b-[1px] text-light-400">
        JOGADORES
      </div>
      <div className="space-y-3 w-full max-h-full overflow-y-scroll pt-3">
        {players?.length != 0 && players != undefined ? players?.map((i) => {
          return (
            <PlayerCard
              key={i[0]}
              name={i[0]}
              age={i[1]}
              nationality={i[2]}
              photo={i[3]}
            ></PlayerCard>
          );
        }) : <PlayerCard name="404 NOT FOUND" age="?" nationality="NO PLAYERS FOUND"></PlayerCard>}
      </div>
    </div>
  );
}
