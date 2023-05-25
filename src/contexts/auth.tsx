import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import auth from "../services/auth";
import { useNavigate } from "react-router-dom";

interface IAuthContextData {
  signed: boolean;
  user: object | null;
  login(key: string, manterLogin?: boolean): Promise<object | null>;
  logout(): void;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<object | null>(null);
  const autoredirect = useNavigate();

  useEffect(() => {
    async function loadStoragedKey() {
      const storagedKey = await localStorage.getItem("APIkey");
      if (storagedKey) {
        const myTeam = await localStorage.getItem("myTeam");
        if (myTeam) {
          login(storagedKey, JSON.parse(myTeam as string));
        } else {
          login(storagedKey);
          autoredirect("/team");
        }
      }
    }
    loadStoragedKey();
  }, []);

  async function login(key: string, manterLogin?: boolean, time?: object) {
    try {
      const { response } = await auth(key);
      setUser({ ...response, team: time ?? {} });

      manterLogin && localStorage.setItem("APIkey", key);

      return user;
    } catch (error) {
      logout();
      let err = error;
      return Promise.reject(err);
    }
  }

  function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
