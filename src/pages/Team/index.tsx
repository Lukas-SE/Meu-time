import { FieldValues } from "react-hook-form";
import TeamForm from "../../components/teamForm/TeamForm";
import ApiCountSmall from "../../components/apiCountSmall/ApiCountSmall";
import { useAuth } from "../../contexts/auth";

export default function Team() {
  const { login } = useAuth();

  async function handleTeam(team: FieldValues) {
    localStorage.setItem("myTeam", JSON.stringify(team));
    const key = localStorage.getItem("APIkey");
    login(key as string, team);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-light-400">
      <div className="w-3/5 md:w-1/3 lg:w-1/4">
        <ApiCountSmall />
        <TeamForm handler={handleTeam} />
      </div>
    </div>
  );
}
