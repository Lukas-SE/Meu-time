import ButtonText from "../../components/ButtonText";
import Dashboard from "./dashboard";
import Logo from "../../components/logo";
import { useAuth } from "../../contexts/auth";

export default function index() {
  const { login, logout } = useAuth();

  async function handleTeamChange() {
    const key = await localStorage.getItem("APIkey");
    login(key as string);
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-light-400">
      <div className="absolute h-[8%] w-11/12 items-center self-center justify-start top-2">
        <div className="flex flex-1 items-center justify-end space-x-8 relative">
          <div className="absolute left-0 mt-auto">
            <Logo />
          </div>
          <ButtonText
            action={handleTeamChange}
            className="bg-transparent underline whitespace-nowrap !text-dark-700"
          >
            TROCAR TIME
          </ButtonText>
          <ButtonText action={logout} className="h-[2.5rem] basis-[7.18rem]">
            SAIR
          </ButtonText>
        </div>
      </div>
      <div className="w-full h-full mt-[8vh] lg:mt-0">
        <Dashboard />
      </div>
    </div>
  );
}
