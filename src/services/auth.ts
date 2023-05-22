import apiClient from "./api-client";

interface IAuth {
  response: {
    account: {
      firstname: string;
    };
    subscription: {
      active: boolean;
    };
    requests: {
      current: number;
      limit_day: number;
    };
  };
}

export default async function auth(key: string): Promise<IAuth> {
  let { response } = await apiClient
    .get("/status", {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": key,
      },
    })
    .then((res) => {
      return res.data;
    });
  let { account, subscription, requests } = response;

  return new Promise((resolve, reject) => {
    if (response?.account) {
      resolve({
        response: {
          account: {
            firstname: account.firstname,
          },
          subscription: {
            active: subscription.active,
          },
          requests: {
            current: requests.current,
            limit_day: requests.limit_day,
          },
        },
      });
    } else {
      reject(new Error("API key invalida!"));
    }
  });
}
