import apiClient from "./api-client";

interface ILeagues {
  name: string;
  id: number;
}
interface ITeams {
  id: number;
  name: string;
}
interface IStatistics {
  league: { name: string };
  team: { name: string; logo: string };
  fixtures: {
    played: { total: string };
    wins: { total: string };
    draws: { total: string };
    loses: { total: string };
  };
  goals: { for: { minute: object } };
  lineups: Array<object>;
}

function apiCall(endpoint: string, key: string, params?: object) {
  return apiClient
    .get(`/${endpoint}`, {
      params: {
        ...params,
      },
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": key,
      },
    })
    .then((res) => {
      return res.data.response;
    });
}

export function useTeam() {
  async function getCountries() {
    const storagedKey = await localStorage.getItem("APIkey");
    const response: string[][] = await apiCall(
      "countries",
      storagedKey as string
    )
      .then((res) =>
        res.map((i: { name: string }) => {
          return i.name;
        })
      )
      .then((res) =>
        res.map((i: string) => {
          return Array(i);
        })
      );
    return response;
  }

  async function getSeasons() {
    const storagedKey = await localStorage.getItem("APIkey");
    const response: string[][] = await apiCall(
      "leagues/seasons",
      storagedKey as string
    )
      .then((res) => {
        return res.map(String);
      })
      .then((res) =>
        res.map((i: string) => {
          return Array(i);
        })
      );
    return response;
  }

  async function getLeagues(params: { country: string; season: string }) {
    const storagedKey = await localStorage.getItem("APIkey");
    const response: string[][] = await apiCall(
      "leagues",
      storagedKey as string,
      { ...params }
    )
      .then((res) => {
        return res.map((i: { league: ILeagues }) => {
          return Object.values(i.league).slice(0, 2).map(String);
        });
      })
      .catch((err) => {
        console.log(err);
        return [["erro1"]];
      });
    return response;
  }

  async function getTeams(params: { league: string; season: string }) {
    const storagedKey = await localStorage.getItem("APIkey");
    const response: string[][] = await apiCall("teams", storagedKey as string, {
      ...params,
    })
      .then((res) => {
        return res.map((i: { team: ITeams }) => {
          return Object.values(i.team).slice(0, 2).map(String);
        });
      })
      .catch((err) => {
        console.log(err);
        return [["erro2"]];
      });
    return response;
  }

  async function getPlayers(params: { team: string; season: string }) {
    const storagedKey = await localStorage.getItem("APIkey");
    const response: string[][] = await apiCall("players", storagedKey as string, {
      ...params,
    })
      .then((res) => {
        return res.map((i: { player: { name: string; age: string | number; nationality: string; photo: string; }; }) => {
          return Array(i.player.name, i.player.age, i.player.nationality, i.player.photo)
        });
      })
      .catch((err) => {
        console.log(err);
        return [["erro3"]];
      });
    return response;
  }

  async function getStatistics(params: {
    league: string;
    season: string;
    team: string;
  }): Promise<Array<string | object | Array<string>>> {
    const dataKeys = ["league", "team", "fixtures", "goals", "lineups"];
    const storagedKey = await localStorage.getItem("APIkey");
    const response: Array<string | object | Array<string>> = await apiCall(
      "teams/statistics",
      storagedKey as string,
      { ...params }
    )
      .then((res: IStatistics) => {
        return Object.entries(res);
      })
      .then((res) => {
        return res.filter((i) => dataKeys.includes(i[0]));
      })
      .then((res) =>
        res.map((i) => {
          return i[0] == "league"
            ? Array(i[1].name)
            : i[0] == "team"
            ? Array(i[1].name, i[1].logo)
            : i[0] == "goals"
            ? Object.entries(i[1].for.minute)
            : i[0] == "lineups"
            ? i[1].length > 0 ? i[1].reduce(
                (highest: { played: number }, i: { played: number }) => {
                  return highest.played > i.played ? highest : i;
                }
              ).formation : 404
            : i[1];
        })
      )
      .catch((err) => {
        console.log(err);
        return [["erro4"]];
      });
    return response;
  }

  return { getCountries, getSeasons, getLeagues, getTeams, getStatistics, getPlayers };
}
