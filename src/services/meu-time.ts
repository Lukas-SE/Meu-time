import apiClient from "./api-client";

interface ILeagues {
  name: string;
  id: number;
}
interface ITeams {
  id: number;
  name: string;
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
        return [["erro"]];
      });
    return response;
  }

  async function getTeams(params: { league: string; season: string }) {
    const storagedKey = await localStorage.getItem("APIkey");
    const response: string[][] = await apiCall("teams", storagedKey as string, {...params})
      .then((res) => {
        return res.map((i: { team: ITeams }) => {
          return Object.values(i.team).slice(0, 2).map(String);
        });
      })
      .catch((err) => {
        console.log(err);
        return [["erro"]];
      });
    return response;
  }

  return { getCountries, getSeasons, getLeagues, getTeams };
}
