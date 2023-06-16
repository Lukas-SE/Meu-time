import { useEffect, useState } from "react";
import GraphContainer from "../graphContainer";
import PlayerScroller from "../playerScroller";
import TeamData from "../teamData";
import { useAuth } from "../../../contexts/auth";
import { useTeam } from "../../../services/meu-time";

interface IUser {
  team: {
    Time: string;
    Temporada: string;
    Liga: string;
  };
}
interface IGames {
  played: { total: number };
  wins: { total: number };
  loses: { total: number };
  draws: { total: number };
}

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<
    Array<string | object | Array<string>>
  >([
    ["carregando..."],
    ["carregando...", undefined],
    {
      wins: { total: 0 },
      played: { total: 0 },
      loses: { total: 0 },
      draws: { total: 0 },
    },
    [[1, 2]],
    "...",
  ]);
  const { user } = useAuth();
  const { getStatistics, getPlayers } = useTeam();

  useEffect(() => {
    async function init() {
      let statistics = await getStatistics({
        league: (user as IUser).team.Liga,
        season: (user as IUser).team.Temporada,
        team: (user as IUser).team.Time,
      });
      setDashboardData(statistics);
    }
    if(localStorage.getItem("myTeam")) {
      init();
    } 
  }, []);

  return (
    <div className="w-screen h-screen overflow-scroll bg-light-400 flex justify-center lg:items-center ">
      <div className="flex flex-col lg:flex-row w-11/12 h-[90%] lg:w-11/22 lg:h-3/4">
        <div className="flex flex-col space-y-2 h-full w-full shrink-0 lg:space-y-0 lg:flex-row lg:mr-5 lg:w-[73%] narrow:w-2/3">
          <div className="flex h-fit w-full lg:w-fit lg:h-full shrink">
            <TeamData
              games={(dashboardData[2] as IGames).played.total}
              wins={(dashboardData[2] as IGames).wins.total}
              loses={(dashboardData[2] as IGames).loses.total}
              draws={(dashboardData[2] as IGames).draws.total}
              topFormation={dashboardData[4] as string}
            />
          </div>
          <div className="w-full h-full">
            <GraphContainer
              teamData={{
                league: dashboardData[0] as string[],
                team: dashboardData[1] as string[],
                season: (user as IUser).team.Temporada,
                goals: dashboardData[3] as Array<Array<{ total: number }>>,
              }}
            />
          </div>
        </div>
        <div className="flex h-[50vh] w-full lg:h-full ">
          <PlayerScroller
            data={(): Promise<string[][]> => {
              return getPlayers({
                team: (user as IUser).team.Time,
                season: (user as IUser).team.Temporada,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
