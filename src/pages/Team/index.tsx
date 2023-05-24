import { FieldValues } from "react-hook-form";
import TeamForm from "../../components/teamForm/TeamForm";
import ApiCountSmall from "../../components/apiCountSmall/ApiCountSmall";

export default function Team() {
  function handleTeam(teste: FieldValues) {
    console.log(teste);
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-light-400">
      <div className="w-3/5 md:w-1/3 lg:w-1/4">
        <ApiCountSmall/>
        <TeamForm handler={handleTeam} />
      </div>
    </div>
  );
}
