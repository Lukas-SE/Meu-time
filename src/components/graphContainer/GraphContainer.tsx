import ApiCountLarge from "../apiCountLarge/ApiCountLarge";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

// Registro dos elementos do gráfico
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip
);
// Interfaces
interface IData {
  total: number;
}
interface IStatistics {
  teamData: {
    league: string[];
    team: string[];
    season: string;
    goals: Array<Array<IData>>;
  }
}

// Componente
export default function GraphContainer({teamData}: IStatistics) {
  const data = {
    labels: teamData.goals?.map((i) => {
      return i[0];
    }),
    datasets: [
      {
        labels: "gols",
        data: teamData.goals?.map((i) => {
          return i[1].total ?? 0;
        }),
        pointRadius: 5,
        pointHoverRadius: 10,
        borderColor: "#0ABBC2",
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "MÉDIA DE GOLS POR MINUTO",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#F2F2F2",
          beginAtZero: true,
          font: {
            size: 10,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#F2F2F2",
          beginAtZero: true,
          min: 0,
          stepSize: 1,
          font: {
            size: 10,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="bg-dark-700 w-full h-full rounded rounded-b-none lg:rounded-br p-10 flex flex-col space-y-5">
      <div className="h-1/4 bg-dark-600 bg-opacity-50 rounded w-full p-5 narrow:p-3 narrow:h-1/3">
        <ApiCountLarge info={{ league: teamData.league, team: teamData.team, season: teamData.season }} />
      </div>
      <div className="bg-dark-600 bg-opacity-50 rounded flex-1 items-center justify-center h-full">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}
