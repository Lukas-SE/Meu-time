import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import auth from "../services/auth";

interface IAuthContextData {
  signed: boolean;
  user: object | null;
  login(key: string, manterLogin?: boolean): Promise<void>;
  logout(): void;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStoragedKey() {
      const storagedKey = await localStorage.getItem("APIkey");
      if (storagedKey) {
        login(storagedKey);
      }
    }
    loadStoragedKey();
    
  }, []);

  async function login(key: string, manterLogin?: boolean) {
    try {
      const { response } = await auth(key);
      setUser({ ...response });
      
      manterLogin && localStorage.setItem("APIkey", key);
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
    <AuthContext.Provider
      value={{ signed: !!user, user, login, logout}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
